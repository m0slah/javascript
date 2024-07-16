//he function can throw an exception

function multiply(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    throw new TypeError();
  }
  return firstNumber * secondNumber;
}

// const result = multiply(3, 5);
// const result = multiply(3, "5");

// console.log(result);

//////////////////////////////////////////
// The function can return an error value:

function multiply(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return NaN;
  }
  return firstNumber * secondNumber;
}

// const result = multiply(2, 5);
const result = multiply(3, "5");

console.log(result);
