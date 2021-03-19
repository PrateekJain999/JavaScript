var express = require('express'); 
var app = express(); 
var path = require('path'); 
var PORT = 3000; 
console.log(__dirname)
// Static Middleware 
app.use(express.static(path.join(__dirname))) 
	
app.get('/', function (req, res, next) { 
	res.render('index.html'); 
}) 

app.use(()=>{
    console.log("hi")
}) 


app.listen(PORT, function(err){ 
	if (err) console.log(err); 
	console.log("Server listening on PORT", PORT); 
}); 
