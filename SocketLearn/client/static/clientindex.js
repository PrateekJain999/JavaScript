const socket = io();

var s1= socket.id;

socket.on('connect', ()=>{
    console.log('user connect on client');
});

socket.on('disconnect',()=>{
    console.log('user disconnect from client');
});

socket.on('message', (data)=>{
    console.log(data)
});

function click1()
{    
    socket.emit("data", {
        from: 'hey sexy',
        text: 'hi baby'
    })
};

socket.on('socketid', (data)=>{
    socket.emit('send', data)
})