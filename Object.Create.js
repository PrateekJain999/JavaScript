obj1={name:"prateek", uid:"17BCS4110"}

const obj2=Object.create(obj1,{
  class: {
    enumerable:true,
    writable:true,
    configurable:true,
    value:"CC2"
  }
})

console.log(obj2)
console.log(obj2.name)
console.log(obj2.uid)

let obj3=Object.create(obj1,{
  class: {
    enumerable:true,
    writable:true,
    configurable:true,
    value:"CC2"
  }
})

console.log(obj3)
console.log(obj3.name)