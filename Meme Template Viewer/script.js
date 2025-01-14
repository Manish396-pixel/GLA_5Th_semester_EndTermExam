document.addEventListener("DOMContentLoaded", fetchMemes);

function fetchMemes() {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      const memes = data.data.memes;
      const memeContainer = document.getElementById("meme-container");
      memeContainer.innerHTML = "";
      memes.forEach((meme) => {
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");
        memeDiv.innerHTML = `
                    <img src="${meme.url}" alt="${meme.name}">
                    <p>${meme.name}</p>
                `;
        memeContainer.appendChild(memeDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching memes:", error);
    });
}
