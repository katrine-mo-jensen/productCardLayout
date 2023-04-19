const array1 = [1, 8, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 4;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// can be written as

/* const sumWithInitial = array1.reduce((acc, curr) => acc + curr, 0); */

console.log(sumWithInitial);
// Expected output: 10
