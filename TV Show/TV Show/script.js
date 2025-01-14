document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", fetchShows);
});

function fetchShows() {
  const query = document.getElementById("search-input").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const showContainer = document.getElementById("show-container");
      showContainer.innerHTML = "";
      data.forEach((item) => {
        const show = item.show;
        const showDiv = document.createElement("div");
        showDiv.classList.add("show");
        showDiv.innerHTML = `
                    <img src="${show.image ? show.image.medium : ""}" alt="${
          show.name
        }">
                    <h2>${show.name}</h2>
                    <p>${
                      show.summary
                        ? show.summary.replace(/(<([^>]+)>)/gi, "")
                        : "No description available."
                    }</p>
                `;
        showContainer.appendChild(showDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching shows:", error);
    });
}
