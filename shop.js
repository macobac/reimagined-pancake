//const mainAPI = "http://museum.local/wp-json";
const productsAPI = "https://museum.local/wp-json/wc/store/products";
const cKey = "ck_cc425f48471600ede2440a3806a96202ef56bb12";
const cSecret = "cs_ac9df972f37d6c360f556944d743e44fced33d0a";
const prodDiv = document.querySelector("#product-content");


  fetch(productsAPI, {
    headers: {
      "Authorization": "Basic " + btoa(cKey + ":" + cSecret),
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(products => {
    products.forEach((product, index) => {
      prodDiv.innerHTML += `
      <div class="left-wrap">
        <img src="${product.images[0].src}" alt="${product.images[0].alt}" id="prod-img">
      </div>
      <div class="right-wrap">
        <h2 id="prod-titel">${product.name}</h2>
        <p id="prod-desc">${product.description}</p>
        <p id="prod-price">${product.prices.price / 100} kr</p>
        <button class="add-to-cart btn">Add to cart</button>
      </div>
      `;
    });
    const cartBtns = document.querySelectorAll(".add-to-cart");
    cartBtns.forEach((button, index) => {
      button.addEventListener("click", () => {
        window.location.href = `details.html?product=${index}`;
      })
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
  });

  