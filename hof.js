// function higherOrderFunction(callback) {
//   console.log("Executing the higher order function...");

//     callback();
// }

// function callbackFunction() {
//   console.log("callback function");
// }

// higherOrderFunction(callbackFunction);

function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}  ${name}`);
  };
}

const greetHello = createGreeter("hello");
greetHello("world");

const greetBye = createGreeter("good bye");
greetBye("world");
