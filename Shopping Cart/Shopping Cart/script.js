document.addEventListener("DOMContentLoaded", fetchProducts);

function fetchProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      const productContainer = document.getElementById("product-container");
      productContainer.innerHTML = "";
      data.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p class="price">$${product.price}</p>
                `;
        productContainer.appendChild(productDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}
