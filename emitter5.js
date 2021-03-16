const event = require('events')

const myEmitter = new event.EventEmitter();

myEmitter.once('newListener', (event, listener) => {
  if (event === 'event1') {
    // Insert a new listener in front
    myEmitter.on('event1', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event1', () => {
  console.log('A');
});
myEmitter.emit('event1');