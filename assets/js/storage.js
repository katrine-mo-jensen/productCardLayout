function getStorage(id, a) {
  let intialStorage = { id: id, title: a };
  localStorage.setItem("product", JSON.stringify(intialStorage));

  // document.getElementById("lastname").innerHTML = localStorage.getItem("name");
}

function parseStorage() {
  let name = JSON.parse(localStorage.getItem("product"));

  console.log(name);
}

// localStorage notes

/* const obj = [
  { name: "John", age: 38, city: "New York" },
  { name: "Sissi", age: 30, city: "Rønne" },
];

const myJSON = localStorage.setItem("students", JSON.stringify(obj));

const initialJSON = JSON.parse(localStorage.getItem("students"));

console.log(initialJSON); */
