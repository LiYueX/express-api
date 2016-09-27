var express = require('express')
var app = express()
app.get('/:username', function (req, res) {
  console.log(req.params);
  var username = req.params.username
  var page="<html>"+
            "<body>"+
              "<a href='http://localhost:3000/'>home</a>"+
              "<a href='http://localhost:3000/about'>about</a>"+
              "<h1>"+
                username+'的购物车'+
              "</h1>"+
            "</body>"+
            "</html>"

  res.send(page)
})
app.get('/about', function (req, res) {
  var page="<html>"+
            "<body>"+
            "  <a href='http://localhost:3000/'>home</a>"+
            "  <a href='http://localhost:3000/about'>about</a>"+
            "  <h1>about.html</h1>"+
            "</body>"+
            "</html>"
  res.send(page)
})


app.listen(3000,function(){
  console.log("running on port 3000...");
})
