var jwt = require('jsonwebtoken');

// var token = jwt.sign({ name: 'prateek' }, 'key');

// console.log(token)

// jwt.sign({ name: 'prateek' }, 'key', function (err, token) {
//     console.log(token);
// });

// console.log(jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (60 * 60),
//     data: 'foobar'
// }, 'secret'))

// console.log(jwt.sign({
//     data: 'foobar'
// }, 'secret', { expiresIn: 60 * 60 }));

// console.log(jwt.sign({
//     data: 'foobar'
// }, 'key', { expiresIn: '1s' }))

// var decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGVlayIsImlhdCI6MTYyMDE5NzE5N30.0ZH8F2ZVe-57DAB-Anq0JobXEPUZY1-DhCPMZuCqgA0', 'key');
// console.log(decoded)

// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGVlayIsImlhdCI6MTYyMDE5NzE5N30.0ZH8F2ZVe-57DAB-Anq0JobXEPUZY1-DhCPMZuCqgA0', 'key', function (err, decoded) {
//     console.log(decoded) // bar
// });

// invalid token - synchronous
// try {
//     var decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGVlayIsImlhdCI6MTYyMDE5NzE5N30.0ZH8F2ZVe-57DAB-Anq0JobXEPUZY1-DhCPMZuCqgA0', 'key');
// } catch (err) {
//     console.log(err.message)
// }

// invalid token
// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGVlayIsImlhdCI6MTYyMDE5NzE5N30.0ZH8F2ZVe-57DAB-Anq0JobXEPUZY1-DhCPMZuCqgA0', 'wrong-secret', function (err, decoded) {
//     console.log(err.message)
// });

// get the decoded payload ignoring signature, no secretOrPrivateKey needed
// var decoded = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGVlayIsImlhdCI6MTYyMDE5NzE5N30.0ZH8F2ZVe-57DAB-Anq0JobXEPUZY1-DhCPMZuCqgA0');
// console.log(decoded)

// // get the decoded payload and header
// var decoded = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhdGVlayIsImlhdCI6MTYyMDE5NzE5N30.0ZH8F2ZVe-57DAB-Anq0JobXEPUZY1-DhCPMZuCqgA0', { complete: true });
// console.log(decoded);

// jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZm9vYmFyIiwiaWF0IjoxNjIwMTk4MDY4LCJleHAiOjE2MjAxOTgwNjl9.R5sjEaovQIfhgagHcTSdjl7QvbzDYdWBUjeu3RWDJeY', 'key', function (err, decoded) {
//     if (err) {
//         console.log(err.message)
//     }
//     // console.log(decoded)
// });