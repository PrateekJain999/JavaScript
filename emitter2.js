const event = require('events')

const myEmitter = new event.EventEmitter();
myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('this happens 1');
  });
  console.log("1")
});


myEmitter.emit('event', 'a', 'b');