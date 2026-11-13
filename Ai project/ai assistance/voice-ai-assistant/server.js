
require("dotenv").config();

const express = require("express");
const path = require("path");
const fs = require("fs");
const { execFile, spawn } = require("child_process");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

// --------------------------------
// COMMON FUNCTIONS
// --------------------------------

function reply(message) {
  return message;
}

function openWebsite(url) {
  execFile(
    "cmd.exe",
    ["/d", "/c", "start", "", url],
    (error) => {
      if (error) console.error("Website error:", error.message);
    }
  );
}

function googleSearch(query) {
  openWebsite(
    "https://www.google.com/search?q=" +
    encodeURIComponent(query)
  );

  return reply(`Google par ${query} search kar raha hoon.`);
}

function youtubeOpen() {
  openWebsite("https://www.youtube.com/");
  return reply("YouTube khol raha hoon.");
}

function youtubeSearch(query) {
  const cleanQuery = String(query || "").trim();

  if (!cleanQuery) return youtubeOpen();

  openWebsite(
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(cleanQuery)
  );

  return reply(`YouTube par ${cleanQuery} search kar raha hoon.`);
}

// --------------------------------
// OPEN APPLICATION
// --------------------------------

function launchApplication(name) {
  const appName = String(name || "").toLowerCase().trim();

  const apps = {
    "vscode": ["code", []],
    "vs code": ["code", []],
    "visual studio code": ["code", []],
    "notepad": ["notepad.exe", []],
    "calculator": ["calc.exe", []],
    "कैलकुलेटर": ["calc.exe", []],
    "नोटपैड": ["notepad.exe", []],
  };

  const matchedName = Object.keys(apps).find(
    key => appName === key
  );

  if (!matchedName) return null;

  const [program, args] = apps[matchedName];

  const child = spawn(program, args, {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
    shell: false,
  });

  child.on("error", error => {
    console.error("App error:", error.message);
  });

  child.unref();

  return reply(`${matchedName} open kar raha hoon.`);
}

// --------------------------------
// OPEN FOLDER
// --------------------------------

function openRequestedFolder(folderName) {
  if (!folderName) {
    return reply("Folder ka full path batao.");
  }

  const folderPath = path.resolve(String(folderName));

  if (
    !path.isAbsolute(folderPath) ||
    !fs.existsSync(folderPath) ||
    !fs.statSync(folderPath).isDirectory()
  ) {
    return reply("Folder nahi mila. Full path check karo.");
  }

  execFile("explorer.exe", [folderPath]);

  return reply("Folder open kar raha hoon.");
}

// --------------------------------
// RUN NODE / REACT PROJECT
// --------------------------------

function runRequestedProject(folderName, preferredScript) {
  if (!folderName) {
    return reply("Project ka full folder path batao.");
  }

  const folderPath = path.resolve(String(folderName));

  if (
    !path.isAbsolute(folderPath) ||
    !fs.existsSync(folderPath) ||
    !fs.statSync(folderPath).isDirectory()
  ) {
    return reply("Project folder nahi mila.");
  }

  const packagePath = path.join(folderPath, "package.json");

  if (!fs.existsSync(packagePath)) {
    return reply("Is folder mein package.json nahi mila.");
  }

  try {
    const packageData = JSON.parse(
      fs.readFileSync(packagePath, "utf8")
    );

    const scripts = packageData.scripts || {};
    const allowedScripts = ["dev", "start", "serve", "preview"];

    let script = allowedScripts.includes(preferredScript)
      ? preferredScript
      : "";

    if (!scripts[script]) {
      script = allowedScripts.find(name => scripts[name]) || "";
    }

    if (!script) {
      return reply("Project mein supported script nahi mili.");
    }

    const child = spawn("npm.cmd", ["run", script], {
      cwd: folderPath,
      detached: true,
      stdio: "ignore",
      windowsHide: true,
      shell: false,
    });

    child.on("error", error => {
      console.error("Project error:", error.message);
    });

    child.unref();

    return reply(`Project ka ${script} command start kar raha hoon.`);
  } catch (error) {
    console.error(error);
    return reply("Project start nahi ho paya.");
  }
}

// --------------------------------
// GEMINI AI BRAIN
// --------------------------------

async function askGemini(command) {
  if (!ai) {
    return reply(
      "Gemini API key nahi mili. Apni .env file check karo."
    );
  }

  try {
    const result = await ai.models.generateContent({
      model: "gemini-flash-latest",

      contents: `
You are an intelligent Windows voice assistant.
Understand Hindi, English and Hinglish.

Understand the USER'S INTENTION, not just exact words.

Return ONLY valid JSON in this format:

{
  "action": "youtube_open | youtube_search | google_search | open_app | open_folder | run_project | chat",
  "query": "",
  "name": "",
  "script": "",
  "reply": ""
}

RULES:

1. "YouTube kholo", "YouTube open karo":
   action = youtube_open

2. "CID ka song chalao", "Arijit Singh song play karo",
   "YouTube par comedy video dhundo":
   action = youtube_search
   query = only the actual song/video search topic.

3. "Google par React search karo":
   action = google_search
   query = actual search topic.

4. "VS Code kholo":
   action = open_app
   name = vscode

5. "Calculator kholo":
   action = open_app
   name = calculator

6. "Mera project chalao":
   action = run_project
   Only use a folder path if the user actually provided it.
   Never invent a folder path.
   script = dev or start if specified.

7. "Mujhe JavaScript samjhao":
   action = chat
   reply = helpful answer in simple Hinglish.

8. Never return shell commands or executable code.
9. Never invent file paths.
10. Keep replies short.

User command: ${JSON.stringify(command)}
`,

      config: {
        responseMimeType: "application/json",
      },
    });

    const raw = (result.text || "").trim();

    if (!raw) {
      return reply("AI se response nahi mila.");
    }

    const data = JSON.parse(raw);

    switch (data.action) {
      case "youtube_open":
        return youtubeOpen();

      case "youtube_search":
        return youtubeSearch(data.query || command);

      case "google_search":
        return googleSearch(data.query || command);

      case "open_app":
        return launchApplication(data.name) ||
          reply("Ye application supported list mein nahi hai.");

      case "open_folder":
        return openRequestedFolder(data.name);

      case "run_project":
        return runRequestedProject(
          data.name,
          ["dev", "start", "serve", "preview"].includes(data.script)
            ? data.script
            : ""
        );

      case "chat":
        return reply(data.reply || "Dobara command bolo.");

      default:
        return reply("AI command samajh nahi paya.");
    }

  } catch (error) {
    console.error("Gemini error:", error);

    return reply(
      "AI error: " + (error.message || "Unknown error")
    );
  }
}

// --------------------------------
// MAIN COMMAND HANDLER
// --------------------------------

async function processCommand(command) {
  if (typeof command !== "string" || !command.trim()) {
    return reply("Koi command bolo.");
  }

  const c = command.trim().toLowerCase();

  console.log("User command:", command);

  // Time
  if (
    /\b(time|samay)\b/.test(c) ||
    c.includes("kitne baje") ||
    c.includes("समय")
  ) {
    return reply(
      "Abhi samay hai " +
      new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }

  // Direct YouTube opening
  if (
    c.includes("youtube") &&
    /\b(open|kholo|khol)\b/.test(c)
  ) {
    return youtubeOpen();
  }

  // Direct YouTube searching
  if (
    c.includes("youtube") &&
    /\b(search|dhundo|khojo|par|pe)\b/.test(c)
  ) {
    return youtubeSearch(command);
  }

  // Song/video commands without saying YouTube
  if (
    /\b(song|play|chalao|gana|gaana|video)\b/.test(c) ||
    c.includes("गाना") ||
    c.includes("चलाओ")
  ) {
    return youtubeSearch(command);
  }

  // Direct website opening
  if (
    c.includes("instagram") &&
    /\b(open|kholo|khol)\b/.test(c)
  ) {
    openWebsite("https://www.instagram.com/");
    return reply("Instagram khol raha hoon.");
  }

  if (
    c.includes("facebook") &&
    /\b(open|kholo|khol)\b/.test(c)
  ) {
    openWebsite("https://www.facebook.com/");
    return reply("Facebook khol raha hoon.");
  }

  // Known applications
  const appResult = launchApplication(c);

  if (appResult) return appResult;

  // Other commands go to Gemini
  return await askGemini(command);
}

// --------------------------------
// HEALTH CHECK
// --------------------------------

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Voice AI Assistant running",
  });
});

// --------------------------------
// COMMAND API
// --------------------------------

app.post("/command", async (req, res) => {
  try {
    const command = req.body?.command;

    const response = await processCommand(command);

    res.json({
      success: true,
      message: response,
    });

  } catch (error) {
    console.error("Command error:", error);

    res.status(500).json({
      success: false,
      message: "Command process karte waqt error aaya.",
    });
  }
});

// --------------------------------
// START SERVER
// --------------------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log("--------------------------------");
  console.log("🤖 Voice AI Assistant Started");
  console.log(`Website: http://localhost:${PORT}`);
  console.log(`Health:  http://localhost:${PORT}/health`);
  console.log("--------------------------------");
});
