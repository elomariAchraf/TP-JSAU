//  express framework
var express = require('express');
var app = express();

// bodyParser pour la methode post
var bodyParser = require('body-parser')

// des utilisateurs declarés en locale
const users = [
    {
      name : "achraf",
      password : "password",
      profession : "student"
   },
   {
     name : "Elomari",
     password : "motDePasse",
     profession : "Developper"
  }
]

var hostname = 'localhost';
var port = 8085;


var myRouter = express.Router();

//correction à l'erreur the No 'Access-Control-Allow-Origin'
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


myRouter.route('/info')

// GET Method tested with REST plugin in google chrome
.get(function(req,res){
    res.send(users);
    console.log('GET Method invoked');
})

//POST Method tested with REST plugin in google chrome
.post(function(req,res){
  console.log('POST Method invoked');
 })

//PUT Method tested with REST plugin in google chrome
.put(function(req,res){
      console.log('PUT Method invoked');
})

//DELETE Method tested with REST plugin in google chrome
.delete(function(req,res){
      console.log('DELETE Method invoked');
});
myRouter.route('/')

app.use(myRouter);

// lancement du serveur
app.listen(port, hostname, function(){
	console.log("Listening On http://"+ hostname +":"+port);
});
//version Aissam
// app.listen(port, function(){
// 	console.log("Listening On port : "+  port);
// });
