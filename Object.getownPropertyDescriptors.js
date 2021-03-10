const me={name:"prateek", uid:"17BCS4110"}

const des=Object.getOwnPropertyDescriptors(me)

console.log(des.name.writable)
console.log(des.uid.enumerable)
console.log(des.uid.configurable)
console.log(des.name.value)
