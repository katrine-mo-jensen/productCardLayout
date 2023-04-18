function getProducts() {
  return fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

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

        <section class="purshare">
          <p class="product-price">$${products.price}</p>
          <button onclick="getStorage(${products.id}, '${products.title}')" class="add-to-cart">Add to cart</button>
        </section>
  
  
  `;

  containerElement.appendChild(productElement);
}

getProducts().then((data) => {
  console.log("product data", data);
  data.products.map((product) => {
    addProductTooDom(product);
  });
});
