// var a=5
// let b=6;

// function ab(){
//     console.log(a)
//     console.log(b)
//     var a
// }

// ab()

// a=[1,2,3,4]
// b=[{"a":1},{1:1},{1:1}]
// c=[...b]
// c[0].a=0

// console.log(...a)
// console.log([...a])
// console.log(...b)
// console.log([...b])
// console.log(c,b)

// a=[[1,2,3],[1,2,3]]
// console.log(...a)
// console.log([...a])
// b=[...a]
// console.log(b)
// b[0][0]=9
// console.log(b)
// console.log(a)


// a=[[1,2,3],[1,2,3]]

// b=a.filter((i)=>{
//     return i
// })

// b[0][0]=9
// console.log(a)

// a=[[1,2,3],[1,2,3]]
// // b={...a}
// b=Object.assign([],a)
// b[0][0]=9
// console.log(a)
// console.log(b)


// a=[[1,2,3],[1,2,3]]
// // b={...a}
// b=JSON.parse(JSON.stringify(a))
// b[0][0]=9
// console.log(a)
// console.log(b)

const lodash = require('lodash')


a=[[1,2,3],[1,2,3]]
// b={...a}
b=lodash.cloneDeep(a)
b[0][0]=9
console.log(a)
console.log(b)