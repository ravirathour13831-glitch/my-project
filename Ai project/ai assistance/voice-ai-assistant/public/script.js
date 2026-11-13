
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const startBtn = document.querySelector("#startBtn");
const output = document.querySelector("#output");

let recognition = null;
let listening = false;

function showMessage(message) {
  if (output) output.textContent = message;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;

  speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  speechSynthesis.speak(speech);
}

async function sendCommand(command) {
  try {
    showMessage("Command process ho rahi hai: " + command);

    const response = await fetch("/command", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ command }),
    });

    if (!response.ok) {
      throw new Error("Server status: " + response.status);
    }

    const data = await response.json();
    const message = data.message || "Koi response nahi mila.";

    showMessage("🤖 " + message);
    speak(message);
  } catch (error) {
    console.error("Server error:", error);
    showMessage("Server se connection nahi ho raha. Server check karo.");
  }
}

if (!startBtn || !output) {
  console.error("HTML mein #startBtn ya #output nahi mila.");
} else if (!SpeechRecognition) {
  startBtn.disabled = true;
  showMessage("Is browser mein speech recognition support nahi hai. Microsoft Edge try karo.");
} else {
  recognition = new SpeechRecognition();
  recognition.lang = "hi-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  startBtn.addEventListener("click", () => {
    if (listening) return;

    try {
      recognition.start();
      listening = true;
      showMessage("🎙️ Sun raha hoon... Ab command bolo.");
    } catch (error) {
      console.error("Mic start error:", error);
      showMessage("Microphone start nahi hua. Dobara button dabao.");
    }
  });

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.trim();

    console.log("User:", command);
    showMessage("Aapne bola: " + command);

    sendCommand(command);
  };

  recognition.onerror = (event) => {
    console.error("Voice error:", event.error);
    showMessage("Voice error: " + event.error);
  };

  recognition.onend = () => {
    listening = false;
    console.log("Listening stopped");
  };
}
