const chat = document.querySelector("#chat");
const replies = {
  "Bridal package":
    "Please send your wedding date, ceremony location, preferred style, and whether you need a trial or guest glam.",
  "Event glam":
    "Please share your event date, city, appointment time, and whether you prefer soft glam, full glam, or a custom look.",
  "Photoshoot makeup":
    "Please send the shoot date, location, moodboard, number of looks, and whether makeup changes are needed on set.",
  "Speak to Temawii":
    "I can collect your name, date, and service type first so Temawii can reply with the right availability and quote."
};

document.querySelectorAll(".quick-replies button").forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.reply;
    addBubble(selected, "user");
    window.setTimeout(() => addBubble(replies[selected], "bot"), 320);
  });
});

function addBubble(text, type) {
  const bubble = document.createElement("p");
  bubble.className = `bubble ${type}`;
  bubble.textContent = text;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
}
