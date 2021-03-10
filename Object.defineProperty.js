obj1={name:"prateek", uid:"17BCS4110"}

obj2=Object.defineProperty(obj1,'class',{
  enumerable:true,
  configurable:false,
  writable:true,
  value:'CC2'
})
console.log(obj1)
console.log(obj2)

const object1 = {};  
Object.defineProperty(object1, 'property1', {
  value: 42  
  }); 
// throws an error in strict mode  
console.log(object1.property1);

///////////////////////////////////////////////////////////////////////////////////////
me={name:"prateek", uid:"17BCS4110"}//enumerable, configurable, writable

me.class="CC" //writable
console.log(me)

for(key in me){ //enumerable
  console.log(key)
}

delete me.class; //configurable
console.log(me)

const me={name:"prateek", uid:"17BCS4110"}//enumerable, configurable, writable
Object.defineProperty(me,"class",{
  value:"CC2"
});

me.class="CC" //Not writable
console.log(me.class)

for(key in me){ //Not enumerable
  console.log(key)
}

delete me.class; //Not configurable
console.log(me.class)

//we can add using the manual adding 
/////////////////////////////////////////////////////////////////////////////