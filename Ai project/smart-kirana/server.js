
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();

const User = require("./user");

const app = express();

app.use(express.json({ limit: "10kb" }));

// Frontend files serve karna
app.use(express.static(path.join(__dirname)));

// MongoDB connection reuse karna
let connectionPromise;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable missing");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI)
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  await connectionPromise;
}

// Database connect hone ke baad hi API requests process hongi
app.use(async (req, res, next) => {
  if (req.path !== "/register" && req.path !== "/login") {
    return next();
  }

  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    res.status(500).json({
      message: "Database connection failed"
    });
  }
});

// REGISTER
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Username aur password required hai"
      });
    }

    const cleanUsername = username.trim();

    const existingUser = await User.findOne({
      username: cleanUsername
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username: cleanUsername,
      password: hashedPassword
    });

    return res.status(201).json({
      message: "Registration successful"
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Username already exists"
      });
    }

    console.error("Registration error:", error.message);

    return res.status(500).json({
      message: "Server error"
    });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !password
    ) {
      return res.status(400).json({
        message: "Username aur password required hai"
      });
    }

    const user = await User.findOne({
      username: username.trim()
    });

    if (!user) {
      return res.status(401).json({
        message: "Username ya password galat hai"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Username ya password galat hai"
      });
    }

    return res.json({
      message: "Login successful"
    });
  } catch (error) {
    console.error("Login error:", error.message);

    return res.status(500).json({
      message: "Server error"
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Smart Kirana server is running"
  });
});

// Local computer par server start karna
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Smart Kirana running on port ${PORT}`);
  });
}

// Vercel ke liye Express app export
module.exports = app;

