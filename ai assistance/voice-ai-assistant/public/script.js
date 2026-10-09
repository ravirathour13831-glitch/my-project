
const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


// ================================
// 🎙️ SPEECH SETTINGS
// ================================

recognition.lang = "hi-IN";
recognition.continuous = false;
recognition.interimResults = false;


// ================================
// 🎯 ELEMENTS
// ================================

const startBtn =
    document.querySelector("#startBtn");

const output =
    document.querySelector("#output");


// ================================
// 🎙️ START LISTENING
// ================================

startBtn.addEventListener("click", () => {

    recognition.start();

    output.textContent =
        "🎙️ Sun raha hoon...";

});


// ================================
// 🎤 VOICE → TEXT
// ================================

recognition.onresult = async (event) => {

    const text =
        event.results[0][0].transcript;

    console.log("🎙️ User:", text);

    output.textContent =
        "Aapne bola: " + text;


    // Node.js ko command bhejo
    sendCommand(text);
};


// ================================
// 📡 SEND COMMAND TO NODE
// ================================

async function sendCommand(command) {

    try {

        const response =
            await fetch("/command", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    command: command
                })

            });


        const data =
            await response.json();


        console.log(
            "🤖 AI:",
            data.message
        );


        // Screen par AI ka response
        output.textContent =
            "🤖 " + data.message;


        // 🔊 AI ko bulwao
        speak(data.message);


    } catch (error) {

        console.error(
            "❌ Error:",
            error
        );

        output.textContent =
            "Server se connection nahi ho raha";
    }
}


// ================================
// 🔊 TEXT → SPEECH
// ================================

function speak(text) {

    // Agar pehle se koi voice chal rahi hai
    speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    // Hindi voice
    speech.lang = "hi-IN";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;


    speechSynthesis.speak(speech);
}


// ================================
// ❌ RECOGNITION ERROR
// ================================

recognition.onerror = (event) => {

    console.log(
        "❌ Voice Error:",
        event.error
    );

    output.textContent =
        "Voice error: " + event.error;
};


// ================================
// ✅ SPEECH END
// ================================

recognition.onend = () => {

    console.log(
        "🎙️ Listening stopped"
    );

};

window.onload = () => {
    speak("Hello Ravi, voice test ho raha hai");
};