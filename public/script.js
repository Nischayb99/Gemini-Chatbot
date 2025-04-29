function formatResponseText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/(\n)?\* (.*)/g, "<li>$2</li>")
        .replace(/\n{2,}/g, "</ul><br><ul>")
        .replace(/\n/g, "<br>")
        .replace(/(<ul>)?\s*<li>/, "<ul><li>")
        .replace(/<\/li>(?!<li>)/g, "</li></ul>");
}

async function sendMessage() {
    const input = document.getElementById("user-input");
    const modelSelect = document.getElementById("modelSelect"); // get model dropdown
    const chatBox = document.getElementById("chat-box");

    const userMessage = input.value.trim();
    const selectedModel = modelSelect?.value || "models/gemini-1.5-pro";

    if (!userMessage) return;

    chatBox.innerHTML += `
      <div class="chat-bubble user-bubble">
        <strong>You:</strong> ${userMessage}
      </div>`;

    input.value = "";

    const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, model: selectedModel })
    });

    const data = await res.json();
    const formatted = formatResponseText(data.reply);

    chatBox.innerHTML += `
      <div class="chat-bubble gemini-bubble">
        <strong>Gemini (${selectedModel.split('/').pop()}):</strong><br>${formatted}
      </div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Load dark mode setting on page load
window.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark) document.body.classList.add("dark-mode");
});
