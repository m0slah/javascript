//he function can throw an exception

function multiply(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new TypeError();
  }
  return firstNumber * secondNumber;
}

// const result = multiply(3, 5);
const result = multiply(3, "5");

console.log(result);

