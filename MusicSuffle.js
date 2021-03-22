// const { random } = require("lodash")

a=[1,2,3,4,5,6,7,8,9,10]

//using Array o(n3)
// c=[]

// while(1){
//     a=a=Math.floor(Math.random(0,1)*10+1)
//     if(!c.includes(a)){
//         c.push(a)
//     }
//     if(c.length===10){
//         break;
//     }
// }

// console.log(c)


//using object o(n3)
c={}

setInterval(()=>{
    while(true){
        a=Math.floor(Math.random(0,1)*10+1)
        Object.create(c)
        c["+"+a]=1
    
        if(Object.keys(c).length===10)
        {
            console.log(c)
            c={}
        }
    }
    
},5000)