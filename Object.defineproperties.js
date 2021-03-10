//same as defineproperty but in this we can add mutiple property
const me={name:"prateek", uid:"17BCS4110"}//enumerable, configurable, writable
Object.defineProperties(me,{
  class:{value:"CC2"},
  clg:{
    value:"CU"
  }
})

me.class="CC" //Not writable
console.log(me.class)

for(key in me){ //Not enumerable
  console.log(key)
}

delete me.class; //NOT configurable
console.log(me.class)