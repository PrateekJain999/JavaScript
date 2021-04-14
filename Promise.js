let p = new Promise((resolve, reject) => {
  let a = 1 + 2

  if (a === 2) {
    resolve('Success')
  }
  else {
    reject('Failed')
  }
})

p.then((msg) => {
  console.log('Promise ' + msg)
}).catch((msg) => {
  console.log('Promise ' + msg)
}).finally(() => {
  console.log("Hi")
})