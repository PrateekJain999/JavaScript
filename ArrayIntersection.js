const { some } = require('lodash')
const lodash = require('lodash')
a=[1,2,3,4,5]
b=[1,2,4]

// c=a.filter((i)=>b.includes(i))
// c=a.filter(i=>b.indexOf(i)!==-1)
// c=lodash.intersection(a,b)
// c=a.filter(i=>b.some(j=>i===j))

// c=[]
// for(i of a){
//     for(j of b){
//         if(i===j){
//             c.push(i)
//         }
//     }
// }

// console.log(c)

// c=[]
// a.filter(i=>{
//     x=b.some(j=>i===j)
//     if(!c.includes(i) && x){
//         c.push(i)
//     }
// })

// console.log(c)

// c=[]
// a.filter(i=>{
//     x=b.indexOf(i)!==-1
//     if(!c.includes(i) && x){
//         c.push(i)
//     }
// })

// console.log(c)

// console.log([...new Set(a.filter(i=>b.indexOf(i)!==-1))])