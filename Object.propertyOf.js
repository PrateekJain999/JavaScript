const prototype1 = {};
const object1 = Object.create(prototype1,{
  class:{
    enumerable:true,
    value:"CC2"
  }
});
const prototype2 = {};  
const object2 = Object.create(prototype2);  
console.log(Object.getPrototypeOf(object1) === prototype1);  
console.log(Object.getPrototypeOf(object2) === prototype2);   