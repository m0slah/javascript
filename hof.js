function higherOrderFunction(callback) {
  console.log("Executing the higher order function...");

    callback();
}

function callbackFunction() {
  console.log("callback function");
}

higherOrderFunction(callbackFunction);
