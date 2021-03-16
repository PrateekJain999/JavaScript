const event = require('events')

const myEmitter = new event.EventEmitter();
// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// Prints: 2

let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');