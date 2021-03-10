const ar=[1,[2,[3,[[[[4]]]]]]]

a=ar.flat(1)
document.write(JSON.stringify(a))

// a=ar.flat(3)
// document.write(JSON.stringify(a))

// a=ar.flat(5)
// document.write(JSON.stringify(a))