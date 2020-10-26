const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.addListener('messageLogged', function() {
    console.log('Listener called');
})

emitter.emit('messageLogged');
