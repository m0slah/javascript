const pass = new Promise((resolve, reject) => {
  const grade = 11;
  if (grade > 50) {
    resolve("passed");
  } else {
    reject("failed");
  }
});

pass
  .then((message) => {
    console.log("tha status of your exam: " + message);
  })
  .catch((message) => {
    console.log("this is in catched: " + message);
  });
