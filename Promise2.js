new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  console.log("byee")
  throw new Error("Whoops!"); // rejects the promise
}).catch(() => { console.log("hi") }); // Error: Whoops!