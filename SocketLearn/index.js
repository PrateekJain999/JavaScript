const express = require('express');
const { isObject } = require('lodash');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '/client')));


io.on('connection', function(socket){
    console.log('user connected on server');

    socket.emit('message', 'hi prateek')

    socket.on('data', (data)=>{
        console.log(data)
    })

    socket.emit('socketid', socket.id)

    socket.on('send', (data)=>{
        console.log('sata: ',data)
        if(socket.id == data){
            console.log('equal')
        }
    })

    socket.on('disconnect',function(){
        console.log('user disconnected from server');
    })
});

server.listen(3000, ()=>{
    console.log('server is running on port 8000');
});