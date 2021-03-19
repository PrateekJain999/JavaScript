const event = require('events')

const myEmitter = new event.EventEmitter();
myEmitter.on('event', function firstListener() {
    console.log('Helloooo! first listener');
  });
  // Second listener
  myEmitter.on('event', function secondListener(arg1, arg2) {
    setInterval(()=>{
      console.log(`event with parameters ${arg1}, ${arg2} in second listener`)},2000)
    
  });
  // Third listener
  myEmitter.on('event', function thirdListener(...args) {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
  });
  
  console.log(myEmitter.listeners('event'));
  
  myEmitter.emit('event', 1, 2, 3, 4, 5);