const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./user");

const app = express();
const PORT = 3000;


// =========================
// JSON DATA
// =========================

app.use(express.json());


// =========================
// MONGODB CONNECTION
// =========================

mongoose.connect(
    "mongodb+srv://ravirathour13831_db_user:ravishop13831@cluster0.k1bk6lj.mongodb.net/?appName=Cluster0"
)
.then(() => {
    console.log("MongoDB Connected ✅");
})
.catch((error) => {
    console.log("MongoDB Connection Error ❌");
    console.log(error);
});


// =========================
// FRONTEND FILES
// =========================

app.use(express.static(__dirname));


// =========================
// REGISTER
// =========================

app.post("/register", async (req, res) => {

    try {

        const { username, password } = req.body;


        // Empty check

        if (!username || !password) {

            return res.status(400).json({
                message: "Username aur password required hai ❌"
            });

        }


        // Check existing user

        const existingUser = await User.findOne({
            username: username
        });


        if (existingUser) {

            return res.status(400).json({
                message: "Username already exist karta hai ❌"
            });

        }


        // Password hash

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create new user

        const user = new User({

            username: username,

            password: hashedPassword

        });


        // Save MongoDB

        await user.save();


        res.json({

            message: "Registration successful ✅"

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server error ❌"

        });

    }

});


// =========================
// LOGIN
// =========================

app.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body;


        // Empty check

        if (!username || !password) {

            return res.status(400).json({

                message: "Username aur password required hai ❌"

            });

        }


        // MongoDB se user find karo

        const user = await User.findOne({

            username: username

        });


        // User nahi mila

        if (!user) {

            return res.status(401).json({

                message: "Username ya password galat hai ❌"

            });

        }


        // Password check

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );


        // Password wrong

        if (!isMatch) {

            return res.status(401).json({

                message: "Username ya password galat hai ❌"

            });

        }


        // Login successful

        res.json({

            message: "Login successful ✅"

        });


    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server error ❌"

        });

    }

});


// =========================
// SERVER START
// =========================

app.listen(PORT, "0.0.0.0", () => {

    console.log(
        `Server running on port ${PORT} 🚀`
    );

});