function getProducts() {
  return fetch("https://dummyjson.com/products?limit=1")
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

const containerElement = document.querySelector(".product-container");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".product-price");
const productDescription = document.querySelector(".product-description");
const productImg = document.querySelector("product-img");

function addProductTooDom(product) {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productTitle.innerHTML = ` ${product.title}`;
  productPrice.innerHTML = ` $${product.price}`;
  productDescription.innerHTML = ` ${product.description}`;
  //   productImg.innerText = ` ${product.thumbnail}`;

  containerElement.appendChild(productElement);
}

getProducts().then((data) => {
  console.log(data);
  data.products.map((product) => {
    addProductTooDom(product);
  });
});
