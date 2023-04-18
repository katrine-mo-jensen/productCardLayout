function getProducts() {
  return fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

// const containerElement = document.querySelector(".product-container");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".product-price");
const productDescription = document.querySelector(".product-description");
const productImg = document.querySelector("product-img");

function addProductTooDom(products) {
  // const productElement = document.createElement("div");
  const containerElement = document.querySelector(".product-container");
  containerElement.classList.add("product");
  productTitle.innerHTML = ` ${products.title}`;
  productPrice.innerHTML = ` $${products.price}`;
  productDescription.innerHTML = ` ${products.description}`;
  //   productImg.innerText = ` ${product.thumbnail}`;

  // containerElement.appendChild(productElement);
}

getProducts().then((data) => {
  console.log(data);
  data.products.map((product) => {
    addProductTooDom(product);
  });
});
