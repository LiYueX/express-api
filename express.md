### 动手写express代码

1. 先创建一个node项目，npm init（记录版本信息，并为别人使用做记录）

2. 创建index.js 并添加以下代码
```js
  var express = require('express')
  var app = express()
  app.get('/', function (req, res) {
     res.send('Hello Li Yuexi')
  })
  app.listen(3000)
```
3. 命令行执行 node index.js

4. 打开浏览器，输入地址localhost:3000,即可显示 'Hello Li Yuexi'

5. HTTP 请求  = Verb(动词) + Path（路径）
  ( ps: HTTP请求 = get/post..   +  /about )

6. express 的代码是要在服务器上运行的。
```js
  app.get('/', function (req, res) {
     res.send('Hello Li Yuexi')
  })

  app.post('/', function (req, res) {
     res.send('Hello Li Yuexi')
  })
```
  以上都是服务器用来接收请求，常用的请求有get和post两种。
  - get : 从指定的资源请求数据并对客户端响应。
  - post : 是向指定的资源提交要被处理的数据。

7. 什么是路由？router?
  基本意思：根据http请求，决定哪个页面要显示，根据http请求，决定哪一段代码先执行。

  ps:get /about
  - 路由代码
  - 根据get内的路径，选择执行的代码段

### 读取请求参数

request = verb + Path

参数(parameters)要作为 path 来传入后台

这样，可以实现前台数据传入后台代码中

```js
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
```
console.log(req.params) --> { username: 'liyuexi' }
