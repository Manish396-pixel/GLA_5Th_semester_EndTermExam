document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", fetchEmojis);
});

function fetchEmojis() {
  const query = document.getElementById("search-input").value.toLowerCase();
  fetch("https://exam-fawn-eight.vercel.app/emoji/")
    .then((response) => response.json())
    .then((data) => {
      const emojiContainer = document.getElementById("emoji-container");
      emojiContainer.innerHTML = "";
      data.forEach((emoji) => {
        if (emoji.name.toLowerCase().includes(query)) {
          const emojiDiv = document.createElement("div");
          emojiDiv.classList.add("emoji");
          emojiDiv.textContent = emoji.symbol;
          emojiContainer.appendChild(emojiDiv);
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching emojis:", error);
    });
}
