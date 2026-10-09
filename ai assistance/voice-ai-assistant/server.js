const express = require("express");
const { execFile, spawn } = require("child_process");

const app = express();


// ========================================
// 📦 MIDDLEWARE
// ========================================

app.use(express.json());
app.use(express.static("public"));


// ========================================
// 🌐 WEBSITE OPEN
// ========================================

function openWebsite(url) {
    execFile("cmd.exe", [
        "/c",
        "start",
        "",
        url
    ]);
}


// ========================================
// 🔎 GOOGLE SEARCH
// ========================================

function googleSearch(query) {

    const url =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);

    openWebsite(url);
}


// ========================================
// 🎬 YOUTUBE SEARCH
// ========================================

function youtubeSearch(query) {

    const url =
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(query);

    openWebsite(url);
}


// ========================================
// 🧮 SAFE CALCULATOR
// ========================================

function calculateExpression(expression) {

    // केवल numbers और basic operators allow
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        return null;
    }

    try {

        const result =
            Function(
                `"use strict"; return (${expression})`
            )();

        if (
            typeof result !== "number" ||
            !Number.isFinite(result)
        ) {
            return null;
        }

        return result;

    } catch (error) {

        return null;
    }
}


// ========================================
// 🧮 MATH COMMAND
// ========================================

function processCalculation(command) {

    let expression = command;


    // ========================================
    // Hindi / English words remove
    // ========================================

    expression = expression
        .replace("कितने होते हैं", "")
        .replace("कितना होता है", "")
        .replace("कितना होगा", "")
        .replace("कितने होंगे", "")
        .replace("कितना है", "")
        .replace("calculate", "")
        .replace("calculation", "")
        .replace("गणना", "")
        .replace("calculator", "")
        .replace("कैलकुलेटर", "")
        .trim();


    // ========================================
    // ENGLISH OPERATORS
    // ========================================

    expression = expression
        .replace(/\bplus\b/gi, "+")
        .replace(/\bminus\b/gi, "-")
        .replace(/\binto\b/gi, "*")
        .replace(/\btimes\b/gi, "*")
        .replace(/\bdivide\b/gi, "/")
        .replace(/\bdivided by\b/gi, "/");


    // ========================================
    // HINDI OPERATORS
    // ========================================

    expression = expression
        .replace(/जोड़/gi, "+")
        .replace(/प्लस/gi, "+")
        .replace(/माइनस/gi, "-")
        .replace(/घटा/gi, "-")
        .replace(/गुणा/gi, "*")
        .replace(/गुना/gi, "*")
        .replace(/भाग/gi, "/")
        .replace(/बटा/gi, "/");


    // ========================================
    // CALCULATE
    // ========================================

    const result =
        calculateExpression(expression);


    if (result === null) {
        return null;
    }


    return {
        expression: expression,
        result: result
    };
}


// ========================================
// 🧹 CLEAN SEARCH QUERY
// ========================================

function cleanSearchQuery(command, words) {

    let query = command;

    words.forEach(word => {
        query = query.replace(word, "");
    });

    return query.trim();
}


// ========================================
// 🧠 COMMAND PROCESSOR
// ========================================

function processCommand(command) {

    command = String(command)
        .toLowerCase()
        .trim();


    console.log(
        "🧠 Processing:",
        command
    );


    // ========================================
    // 🧮 CALCULATOR / MATH
    // ========================================

    // FIXED REGEX
    const hasMath =
        /[0-9]+\s*[+\-*/]\s*[0-9]+/.test(command);


    if (
        hasMath ||
        command.includes("कितने होते हैं") ||
        command.includes("कितना होता है") ||
        command.includes("कितना होगा") ||
        command.includes("कितने होंगे") ||
        command.includes("calculate") ||
        command.includes("गणना")
    ) {

        const calculation =
            processCalculation(command);


        if (calculation !== null) {

            return (
                `${calculation.expression} = ` +
                `${calculation.result}`
            );
        }
    }


    // ========================================
    // ⏰ TIME
    // ========================================

    if (
        command.includes("time") ||
        command.includes("टाइम") ||
        command.includes("समय") ||
        command.includes("कितना टाइम") ||
        command.includes("समय क्या") ||
        command.includes("टाइम क्या")
    ) {

        const now =
            new Date();


        const time =
            now.toLocaleTimeString(
                "hi-IN",
                {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                }
            );


        return `अभी समय ${time} है`;
    }


    // ========================================
    // 🎬 YOUTUBE
    // ========================================

    if (
        command.includes("youtube") ||
        command.includes("यूट्यूब") ||
        command.includes("युटुब")
    ) {

        let query =
            cleanSearchQuery(
                command,
                [
                    "youtube",
                    "यूट्यूब",
                    "युटुब",
                    "पर",
                    "पे",
                    "में",
                    "खोलो",
                    "खोल",
                    "चलाओ",
                    "देखो",
                    "search",
                    "सर्च",
                    "करो"
                ]
            );


        // YouTube search
        if (query.length > 0) {

            console.log(
                "🔎 YouTube Search:",
                query
            );


            youtubeSearch(query);


            return (
                `YouTube पर ${query} ` +
                `search कर रहा हूँ`
            );
        }


        // केवल YouTube open
        openWebsite(
            "https://www.youtube.com"
        );


        return "YouTube open हो गया";
    }


    // ========================================
    // 🔎 GOOGLE
    // ========================================

    if (
        command.includes("google") ||
        command.includes("गूगल")
    ) {

        let query =
            cleanSearchQuery(
                command,
                [
                    "google",
                    "गूगल",
                    "पर",
                    "पे",
                    "में",
                    "खोलो",
                    "खोल",
                    "search",
                    "सर्च",
                    "करो"
                ]
            );


        // Google search
        if (query.length > 0) {

            console.log(
                "🔎 Google Search:",
                query
            );


            googleSearch(query);


            return (
                `Google पर ${query} ` +
                `search कर रहा हूँ`
            );
        }


        // केवल Google open
        openWebsite(
            "https://www.google.com"
        );


        return "Google open हो गया";
    }


    // ========================================
    // 📸 INSTAGRAM
    // ========================================

    if (
        command.includes("instagram") ||
        command.includes("इंस्टाग्राम")
    ) {

        let query =
            cleanSearchQuery(
                command,
                [
                    "instagram",
                    "इंस्टाग्राम",
                    "पर",
                    "पे",
                    "में",
                    "खोलो",
                    "खोल",
                    "ढूंढो",
                    "ढूंढ",
                    "दूंढो",
                    "दूँढो",
                    "search",
                    "सर्च",
                    "करो",
                    "की id",
                    "की आईडी",
                    "की प्रोफाइल",
                    "प्रोफाइल"
                ]
            );


        // ========================================
        // केवल Instagram खोलना
        // ========================================

        if (query.length === 0) {

            openWebsite(
                "https://www.instagram.com"
            );

            return "Instagram open हो गया";
        }


        // ========================================
        // USERNAME CLEAN
        // ========================================

        // @ हटाना
        query = query.replace("@", "");

        // Extra spaces हटाना
        query = query.trim();


        // ========================================
        // DIRECT INSTAGRAM PROFILE
        // ========================================

        const username =
            query.replace(/\s+/g, "");


        const instagramUrl =
            "https://www.instagram.com/" +
            encodeURIComponent(username) +
            "/";


        console.log(
            "📸 Instagram Profile:",
            instagramUrl
        );


        openWebsite(instagramUrl);


        return (
            `Instagram पर ${query} की ` +
            `profile open कर रहा हूँ`
        );
    }


    // ========================================
    // 📘 FACEBOOK
    // ========================================

    if (
        command.includes("facebook") ||
        command.includes("फेसबुक")
    ) {

        openWebsite(
            "https://www.facebook.com"
        );


        return "Facebook open हो गया";
    }


    // ========================================
    // 📷 CAMERA
    // ========================================

    if (
        command.includes("camera") ||
        command.includes("कैमरा")
    ) {

        execFile(
            "cmd.exe",
            [
                "/c",
                "start",
                "",
                "microsoft.windows.camera:"
            ]
        );


        return "Camera open हो गया";
    }


    // ========================================
    // 🧮 WINDOWS CALCULATOR
    // ========================================

    if (
        command.includes("calculator") ||
        command.includes("कैलकुलेटर")
    ) {

        spawn(
            "calc.exe",
            [],
            {
                detached: true
            }
        );


        return "Calculator open हो गया";
    }


    // ========================================
    // 📝 NOTEPAD
    // ========================================

    if (
        command.includes("notepad") ||
        command.includes("नोटपैड")
    ) {

        spawn(
            "notepad.exe",
            [],
            {
                detached: true
            }
        );


        return "Notepad open हो गया";
    }


    // ========================================
    // ❓ UNKNOWN
    // ========================================

    return (
        "Sorry, मुझे यह command " +
        "समझ नहीं आई"
    );
}


// ========================================
// 📡 COMMAND API
// ========================================

app.post(
    "/command",
    (req, res) => {

        const command =
            String(
                req.body.command || ""
            );


        console.log("");

        console.log(
            "🎙️ Command:",
            command
        );


        const response =
            processCommand(command);


        console.log(
            "🤖 Assistant:",
            response
        );


        res.json({
            message: response
        });
    }
);


// ========================================
// 🚀 START SERVER
// ========================================

app.listen(
    3000,
    "0.0.0.0",
    () => {

        console.log("");

        console.log(
            "================================"
        );

        console.log(
            "🤖 Voice AI Assistant"
        );

        console.log(
            "================================"
        );

        console.log(
            "💻 Laptop:"
        );

        console.log(
            "http://localhost:3000"
        );

        console.log(
            "📱 Phone:"
        );

        console.log(
            "http://172.27.248.231:3000"
        );

        console.log(
            "================================"
        );

        console.log("");
    }
);