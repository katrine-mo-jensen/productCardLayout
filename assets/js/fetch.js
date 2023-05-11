function getProducts() {
  return fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })

    .catch((error) => console.error(error));
}

// cart
const shoppingCartcontainer = document.querySelector("#cart");

function shopping(products) {
  const shoppingElement = document.createElement("div");

  shoppingElement.classList.add("shopping");

  shoppingElement.innerHTML = `
  <header>
  <h2>Shopping cart</h2>
  <p>Everything in your shopping cart currently is</p>
</header>
<section id="display-items-cart"> 

  <button onclick="()">+</button>
  <button onclick="shoppingCart.decreaseCartQuantity(${products.id})">-</button>
</section
<footer>
  <button onclick="shoppingCart.setEmptyCart(${products.id})">
    Remove everything
  </button>
</footer>
  `;

  shoppingCartcontainer.appendChild(shoppingElement);
}
shopping(products);
// const containerElement = document.querySelector(".product-container");
const containerElement = document.querySelector("#products");

function addProductTooDom(products) {
  const productElement = document.createElement("div");

  productElement.classList.add("product");

  productElement.innerHTML = `
  <header>
      <h2 class="product-title">${products.title}</h2>
      <p class="product-description">${products.description}</p>
  </header>
        <img
          class="product-img"
          src="${products.thumbnail}"
          alt="${products.title}"
        />

        <footer class="purshare">
          <p class="product-price">$${products.price}</p>
          <button onclick="shoppingCart.increaseCartQuantity(${products.id}, '${products.title}', ${products.price})" class="add-to-cart">Add to cart</button>
          
        </footer>
  
  `;

  containerElement.appendChild(productElement);
}

getProducts().then((data) => {
  console.log("product data", data);
  data.products.map((product) => {
    addProductTooDom(product);
  });
});
