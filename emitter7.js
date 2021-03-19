const event = require('events')

const myEmitter = new event.EventEmitter();

const callback = (stream) => {
    console.log('someone connected!');
};
myEmitter.on('connection', callback);
myEmitter.on('connection', ()=>{
    console.log("Called")
});
myEmitter.on('connection', callback);
// ...
myEmitter.emit('connection')
myEmitter.removeAllListeners('connection');
// myEmitter.removeListener('connection', callback);
myEmitter.emit('connection')

console.log("hi")