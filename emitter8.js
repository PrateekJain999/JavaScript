const event = require('events')

const myEmitter = new event.EventEmitter();

const callbackA = () => {
    console.log('A');
    myEmitter.removeListener('event', callbackB);
  };
  
  const callbackB = () => {
    console.log('B');
  };
  
  myEmitter.on('event', callbackA);
  
  myEmitter.on('event', callbackB);
  
  // callbackA removes listener callbackB but it will still be called.
  // Internal listener array at time of emit [callbackA, callbackB]
  myEmitter.emit('event');
  // Prints:
  //   A
  //   B
  
  // callbackB is now removed.
  // Internal listener array [callbackA]
  myEmitter.emit('event');
  // Prints:
  //   A