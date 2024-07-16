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
// const result = multiply(3, "5");

// console.log(result);

//////////////////////////////////////////
// he function can convert its arguments to useful values:

function multiply(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return Number(firstNumber) * Number(secondNumber);
  }

  return firstNumber * secondNumber;
}

// const result = multiply(2, 5);
// const result = multiply(3, "5");

// console.log(result);

//////////////////////////////////////////
// Coercion
// console.log(3 * true);
// console.log(3 * false);

// console.log(3 / 0);
// console.log(Number("abc "));

// console.log("prop" in null);

function isNan(number) {
  let num = Boolean(number);

  return num;
}

const result = isNan(1);

console.log(typeof result);
