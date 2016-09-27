var express = require('express')
var app = express()
app.get('/', function (req, res) {
  console.log('Hello Li Yuexi')
  res.send('Hello Li Yuexi')
})
app.get('/xixi', function (req, res) {
  console.log('Hello xixi')
  res.send('Hello xixi')
})
app.get('/mengmeng', function (req, res) {
  console.log('Hello mengmeng')
  res.send('Hello mengmeng')
})

app.listen(3000,function(){
  console.log("running on port 3000...");
})
