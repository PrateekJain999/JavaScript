/*the Object.seal() method seals an object, preventing new properties from being added to it and marking 
all existing properties as non-configurable.*/

me={name:"prateek",class:"CC"}

Object.seal(me)

me.uid="17BCS4110"

console.log(me)
console.log(me.uid)
console.log(Object.isSealed(me))

a=Object.getOwnPropertyDescriptors(me)
console.log(a.name.configurable)
console.log(a.name.enumerable)
console.log(a.name.writable)