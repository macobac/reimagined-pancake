//const mainAPI = "http://museum.local/wp-json";
const productsAPI = "https://museum.local/wp-json/wc/store/products";
const cKey = "ck_cc425f48471600ede2440a3806a96202ef56bb12";
const cSecret = "cs_ac9df972f37d6c360f556944d743e44fced33d0a";
const prodDiv = document.querySelector("#product-content");

fetch(productsAPI, {
  headers: {
    'Authorization': 'Basic ' + btoa(cKey + ':' + cSecret),
    'Content-Type': 'application/json'
  }
})

  .then(response => response.json())
  .then(products => {
    products.forEach(products =>
      prodDiv.innerHTML += `
      <div class="left-wrap">
        <img src="${products.images[0].src}" alt="${products.images[0].alt}" id="prod-img">
      </div>
      <div class="right-wrap">
        <h2 id="prod-titel">${products.name}</h2>
        <p id="prod-desc">${products.description}</p>
        <p id="prod-price">${products.prices.price/100} kr</p>
        <button id="add-to-cart">Add to cart</button>
      </div>
      `
    )
  })

  .catch(error => {
    console.error('Error fetching products:', error);
  });

