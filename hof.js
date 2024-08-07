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

// function filterArray(array, condition) {
//   return array.filter(condition);
// }

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);

// console.log(evenNumbers);

// function createMultiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = createMultiplier(5);
// console.log(double(2));

// Popular Higher Order Functions in JavaScript
// map() function

// const numbers = [1, 2, 3, 4, 5];
// const double = numbers.map((num) => num * 2);
// console.log(double);

// const names = ["apple", "banana", "orange"];
// const upperCaseNames = names.map((name) => name.toUpperCase());
// console.log(upperCaseNames);

//////////////////////////////////////////////////////////////////////////
//  filter() function
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// const names = ["apple", "banana", "orange"];
// const longWords = names.filter((name) => name.length > 5);
// console.log(longWords);

//////////////////////////////////////////////////////////////////////////
// reduce() function
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);

//////////////////////////////////////////////////////////////////////////
// // forEach() function

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => console.log(num));

// const names = ["apple", "banana", "orange","greep"];
// names.forEach((name) => console.log(name));

//////////////////////////////////////////////////////////////////////////

// some() Checking if at least one element in an array meets a condition.
// Example 1: Checking if any number in the array is greater than 10

// const numbers = [1, 2, 3, 4, 5];
// const greaterThanThree = numbers.some((num) => num > 3);
// console.log(greaterThanThree);

// const words = ["apple", "banana", "grape", "kiwi", "orange"];
// const startWithA = words.some((name) => name.startsWith("a"));
// console.log(startWithA);
