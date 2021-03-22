// var express = require('express'); 
// var app = express(); 
// var path = require('path'); 
// var cors = require('cors')

// var PORT = 3000; 
// console.log(__dirname)
// // Static Middleware 
// app.use(express.static(path.join(__dirname)))
// app.use(cors({
//     origin: 'http://localhost:3000/pk'
//   }))
	
// app.get('/', function (req, res, next) { 
// 	res.render('index.html'); 
// }) 

// app.listen(PORT, function(err){ 
// 	if (err) console.log(err); 
// 	console.log("Server listening on PORT", PORT); 
// }); 


var express = require('express')
var cors = require('cors')
var app = express()
 
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 
app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})
 
app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 80')
})