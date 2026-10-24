
const form = document.getElementById("scanForm");
const type = document.getElementById("type");
const identifier = document.getElementById("identifier");
const report = document.getElementById("report");
const output = document.getElementById("output");

const historyFile = document.getElementById("historyFile");
const loadHistory = document.getElementById("loadHistory");
const historyMessage = document.getElementById("historyMessage");
const historyList = document.getElementById("historyList");

// Run the demo scan
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!identifier.value.trim()) {
    alert("Please enter an identifier.");
    return;
  }

  report.classList.remove("hidden");
  document.getElementById("resultType").textContent = type.value;

  const commands = [
    "> Initializing CyberTrace scanner...",
    "> Loading demo environment... OK",
    "> Identifier received... OK",
    "> Checking authorized data sources...",
    "> Public data: NOT CHECKED",
    "> Private browsing history: UNAVAILABLE",
    "> Private video history: UNAVAILABLE",
    "> Scan complete!",
    "> This is a simulated report."
  ];

  output.textContent = "";
  report.scrollIntoView({ behavior: "smooth", block: "start" });

  let index = 0;

  const timer = setInterval(function () {
    if (index >= commands.length) {
      clearInterval(timer);
      return;
    }

    output.textContent += commands[index] + "\n";
    index++;
  }, 250);
});

// Open and close the activity sections
document.querySelectorAll(".activity-button").forEach(function (button) {
  button.addEventListener("click", function () {
    const panel = document.getElementById(button.dataset.panel);
    const isHidden = panel.classList.contains("hidden");

    panel.classList.toggle("hidden");
    button.querySelector("span").textContent = isHidden ? "−" : "＋";
  });
});

// Load the user's own exported YouTube watch history
loadHistory.addEventListener("click", async function () {
  const file = historyFile.files[0];

  historyList.replaceChildren();
  historyMessage.textContent = "";

  if (!file) {
    historyMessage.textContent = "Pehle apni JSON history file select karo.";
    return;
  }

  try {
    const text = await file.text();
    const data = JSON.parse(text);

    if (!Array.isArray(data)) {
      throw new Error("Expected a JSON array.");
    }

    // Google Takeout watch-history exports commonly use this format.
    const videos = data.filter(function (item) {
      return (
        typeof item.title === "string" &&
        item.title.startsWith("Watched ")
      );
    });

    if (videos.length === 0) {
      historyMessage.textContent =
        "Expected watch-history entries nahi mili. Original YouTube watch-history JSON file select karo.";
      return;
    }

    historyMessage.textContent =
      `File mein ${videos.length} matching video entries mili.`;

    videos.forEach(function (video) {
      const card = document.createElement("article");
      card.className = "history-item";

      const title = document.createElement("p");
      title.textContent = video.title.replace(/^Watched /, "");
      card.appendChild(title);

      if (video.time) {
        const date = document.createElement("small");
        const parsedDate = new Date(video.time);

        date.textContent = Number.isNaN(parsedDate.getTime())
          ? video.time
          : parsedDate.toLocaleString();

        card.appendChild(date);
      }

      const link = (video.titleUrl || "").trim();

      if (
        link.startsWith("https://www.youtube.com/") ||
        link.startsWith("https://youtu.be/")
      ) {
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.textContent = "Open video";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        card.appendChild(anchor);
      }

      historyList.appendChild(card);
    });
  } catch (error) {
    historyMessage.textContent =
      "JSON file read nahi hui. Sahi exported history file select karo.";
  }
});
