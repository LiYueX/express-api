var express = require('express')
var app = express()
app.get('/:path', function (req, res) {
  console.log(req.query);
  var path = req.params.path
  var page="<html>"+
            "<body>"+
              "<h1>"+
                path+'的页面下，'+
                req.query.username+"的购物车,它今年"+
                req.query.age+'岁了'+
              "</h1>"+
              "<form>"+
                "<input type='text' name='username'/>"+
                "<input type='text' name='age'/>"+
                "<input type='submit' value='提交'/>"+
              "</form>"+
            "</body>"+
            "</html>"
  res.send(page)
})
app.post('/:path', function (req, res) {
  res.send('a post request has received by '+req.params.path+'\n')
})



app.listen(3000,function(){
  console.log("running on port 3000...");
})
