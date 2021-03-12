var p1 = new Promise((resolve, reject)=>{
    resolve('hi')
  })
  var p2 = new Promise((resolve, reject)=>{
    reject('hi2')
  })
  var p3 = new Promise((resolve, reject)=>{
    resolve('hi3')
  })
  let a=Promise.allSettled([p1, p2,p3]).then((msg)=>{
    console.log(msg)
  }).catch((msg)=>{
    console.log(msg)
  })
  // console.log(a)