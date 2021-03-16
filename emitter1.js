const event = require('events')

const myEmitter = new event.EventEmitter();
myEmitter.on('event', function (...a) {
  console.log(a, this);
  // Prints: a b {}
});
myEmitter.emit('event', 'a', 'b','c');