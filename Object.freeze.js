const me={name:"prateek", uid:"17BCS4110"}

var keyPair=Object.freeze(me) //it freeze the object

keyPair.name="pk"
document.write(JSON.stringify(keyPair))
console.log(keyPair)