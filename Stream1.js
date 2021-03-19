var fs = require("fs");
const http = require('http');
var data = '';

var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'video/mp4'})
    var readerStream = fs.createReadStream('./1.mp4');

    readerStream.pipe(res)
})


server.listen(8082)