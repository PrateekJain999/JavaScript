const buffer = require('buffer')

var buf1 = new Buffer.alloc(10);
var buf2 =new Buffer.alloc(10,1)
buf2.copy(buf1)

// console.log(Buffer.concat([buf1,buf2]))
console.log(buf1)
// console.log(buf2.compare(buf1))

// buf = new Buffer.alloc(256);
// len = buf.write("Simply Easy Learning");

// console.log("Octets written : "+  len);

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3)

// Creates a Buffer containing the bytes [1, 2, 3].
// const buf4 = Buffer.from([1, 2, 3]);
// console.log(buf4)

// const buf5 = Buffer.from([2, 25, -255, '1']);
// console.log(buf5)

// const buf6 = Buffer.from('tést','utf16le');
// console.log(buf6)


// const buf7 = Buffer.from('{1:1, 2:2, 3:3}','utf16le');
// console.log(buf7.entries())

buf8 = new Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf8[i] = i + 97;
}

// console.log( buf8.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
// console.log( buf8.toString('ascii',0,5));   // outputs: abcde
// console.log( buf8.toString('utf8',0,5));    // outputs: abcde
// console.log( buf8.toString(undefined,0,5));
// console.log(buf8.toJSON())
// console.log(buf8.toString())

// var buffer1 = new Buffer('TutorialsPoint');

// // //slicing a buffer
// var buffer2 = buffer1.slice(0,9);
// console.log("buffer2 content: " + buffer2.toString());

console.log(Buffer.isEncoding('utf8'))

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.indexOf(99.9));
console.log(b.indexOf(256 + 99));

// Passing a byteOffset that coerces to NaN or 0.
// Prints: 1, searching the whole buffer.
console.log(b.indexOf('b', undefined));
console.log(b.indexOf('b', {}));
console.log(b.indexOf('b', null));
console.log(b.indexOf('b', []));