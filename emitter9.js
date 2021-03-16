const {EventEmitter,listenerCount} = require('events')

const ee = new EventEmitter();
function pong() {
    console.log('pong');
}

ee.on('ping', pong);
ee.on('ping', pong);
ee.on('ping', pong);
ee.once('ping', pong);
console.log(listenerCount(ee,'ping'))

// ee.once('ping', pong);
// ee.on('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping')