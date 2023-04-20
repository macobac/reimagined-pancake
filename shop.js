//const mainAPI = "http://museum.local/wp-json";
const productsAPI = "http://museum.local/wp-json/wc/store/products";
const cKey = "ck_cc425f48471600ede2440a3806a96202ef56bb12";
const cSecret = "cs_ac9df972f37d6c360f556944d743e44fced33d0a";


const prodDiv = document.querySelector("#shop-content");

let prodArr = [];

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
    prodArr = products;
    appendData(prodArr);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });


  function appendData(data) {
    const fetchedProd = data.map(product => `
    <h3 data-id="${product.id}">${product.name}</h3>
    <p>${product.description}</p>
    <p>${product.prices.price}</p>
`).join("");
    prodDiv.innerHTML = fetchedProd;
};