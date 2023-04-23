//const mainAPI = "http://museum.local/wp-json";
const productsAPI = "https://museum.local/wp-json/wc/store/products";
const cKey = "ck_cc425f48471600ede2440a3806a96202ef56bb12";
const cSecret = "cs_ac9df972f37d6c360f556944d743e44fced33d0a";
const detailsDiv = document.querySelector("#details-div");

const urlParams = new URLSearchParams(window.location.search);
const prodIndex = parseInt(urlParams.get('product'));

fetch(productsAPI, {
  headers: {
    'Authorization': 'Basic ' + btoa(cKey + ':' + cSecret),
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(products => {
    const product = products[prodIndex];

    // Create HTML for product details
    const detailsDiv = document.getElementById('details-div');
    detailsDiv.innerHTML = `
      <div class="left-wrap">
        <img src="${product.images[0].src}" alt="${product.images[0].alt}" id="prod-img">
      </div>
      <div class="right-wrap">
        <h2 id="prod-titel">${product.name}</h2>
        <p id="prod-desc">${product.description}</p>
        <p id="prod-price">${product.prices.price/100} kr</p>
        <p id="prod-sale-price">${product.prices.sale_price/100} kr</p>
        <p id="prod-avg-rating">${product.average_rating}</p>
        <p id="prod-review-count">${product.review_count}</p>
        <p id="prod-categories">${product.categories.map(category => category.name).join(', ')}</p>
        <p id="prod-in-stock">${product.stock_quantity}</p>
      </div>
    `;
  })
  .catch(error => {
    console.error('Error fetching product:', error);
  });


const backBtn = document.querySelector(".go-back");
backBtn.addEventListener("click", () => {
  window.history.back();
});
