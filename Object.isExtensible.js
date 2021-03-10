//prevent to add new property but we can change the previous values
const object1 = {};

console.log(Object.isExtensible(object1));// expected output: true

object1.name="prateek"

console.log(object1)

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));// expected output: false

object1.name="Prateek"
object1.class="CC2"

console.log(object1)