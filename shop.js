//const mainAPI = "http://museum.local/wp-json";
const productsAPI = "http://museum.local/wp-json/wc/store/products";
const cKey = "ck_cc425f48471600ede2440a3806a96202ef56bb12";
const cSecret = "cs_ac9df972f37d6c360f556944d743e44fced33d0a";
const prodDiv = document.querySelector("#product-content");


// find a list of your website’s available routes on your API’s root at /wp-json
//use these routes to fetch data from the API and build websites with it
//To access related resources for an item, you can add the _embed parameter to your url which will give you a list of related information. For example, if you set featured images on your posts, you can use /wp/v2/posts?_embed to get featured images added to the API call.

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
        <div id="prod-img">${products.images.src}</div>
      </div>
      <div class="right-wrap">
        <h2 id="prod-titel">${products.name}</h2>
        <p id="prod-price">${products.prices.price / 100} kr</p>
        <p id="prod-desc">${products.description}</p>
        <button id="add-to-cart">Add to cart</button>
      </div>
      `
    )
  })

  .catch(error => {
    console.error('Error fetching products:', error);
  });

  