const me={name:"prateek", uid:"17BCS4110"}

const des=Object.getOwnPropertyDescriptor(me,'name')

console.log(des.writable)
console.log(des.enumerable)
console.log(des.configurable)
console.log(des.value)
