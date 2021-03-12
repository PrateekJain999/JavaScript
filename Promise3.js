// var p1 = new Promise((resolve, reject)=>{
//     resolve('hi')
//   })
//   var p2 = new Promise((resolve, reject)=>{
//     resolve('hi2')
//   })
//   let a=Promise.all([p1, p2]).then((msg)=>{
//     console.log(msg)
//   })

  var p1 = new Promise((resolve, reject)=>{
    resolve('hi')
  })
  var p2 = new Promise((resolve, reject)=>{
    reject('hi2')
  })
  let a=Promise.all([p1, p2]).then((msg)=>{
    console.log(msg)
  }).catch((msg)=>{
    console.log(msg)
  })
  // console.log(a)