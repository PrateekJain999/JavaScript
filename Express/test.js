// function display(x){
//     console.log(x)
// }

// function fun1(a,b,x){
//     c=a+b
//     return x(c)
// }

// fun1(10,12,display)

// function fun2(a,b) {
//     return new Promise((resolve, reject)=>{
//         resolve(a+b)
//     })
// }

// fun2(10,20).then((ele)=>{
//     console.log(ele)
// })

var f=async function (a,b) {
    v=await a+b
    return v
}

f(1,1).then((v)=>{
    console.log(v)
})