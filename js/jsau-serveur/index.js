const express = require('express')
const app = express()
const morgan = require('morgan')
var path = require("path");

app.use( express.static( 'www' ));
app.use(morgan('dev'));

// Get mêthode
app.get('/', function (req, res) {
  res.sendFile( path.join(__dirname,'/www', 'index.html') );
  console.log('TP 1')
})


const my_shared_code = require('./my_modules/my_shared_file_headless.js')
let even_numbers = my_shared_code.generateEvenNumbers(10)
console.log('even_numbers:', even_numbers)

app.get('/even_numbers', function(req, res) {
    res.send(even_numbers)
})


//app.use( express.static( '/www' ));
/*
app.post('/', function (req, res) {
  res.send('Bonjour Premier TP!')
  //console.log('')
}) */

//message console
app.listen(3000, function () {
  console.log('port 3000')
})
