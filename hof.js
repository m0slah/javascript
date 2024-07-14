// function higherOrderFunction(callback) {
//   console.log("Executing the higher order function...");

//     callback();
// }

// function callbackFunction() {
//   console.log("callback function");
// }

// higherOrderFunction(callbackFunction);

// function createGreeter(greeting) {
//   return function (name) {
//     console.log(`${greeting}  ${name}`);
//   };
// }

// const greetHello = createGreeter("hello");
// greetHello("world");

// const greetBye = createGreeter("good bye");
// greetBye("world");

// function performOperationOnArray(array, operation) {
//   return array.map(operation);
// }

// function double(number) {
//   return number * 2;
// }

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumber = performOperationOnArray(numbers, double);

// console.log(doubleNumber);

function filterArray(array, condition) {
  return array.filter(condition);
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

console.log(evenNumbers);
