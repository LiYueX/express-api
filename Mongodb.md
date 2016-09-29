### mongodb 安装

[linux Mongodb 安装指南](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-ubuntu/)

1. sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

2. echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list

3. sudo apt-get update

4. sudo apt-get install -y mongodb-org

### mongodb 使用

- 在～下新建一个文件夹data，然后在命令行中运行命令 mongod --dbpath= ./data，再开一个命令行，之后输入mongo就进入了数据库

- show dbs 可以看到有几个数据库

- db 或者 db.getName() 都是显示当前是位于哪个数据库

- 再写use person 切换到person数据库，若此数据库不存在则建立一个数据库，并切换到下面

- 在person数据库下加入一个数据集合为 db.person.insert({name:'liyeuxi'})
  ```
  > db.person.insert({name:'liyuexi'})
  WriteResult({ "nInserted" : 1 })

  ```
- 删除当前数据库 db.dropDatabase()

- 查看数据集合中的数据  db.person.find()
  ```
  查看当前数据库下的所有集合
  > show collections
  ```

- 创建集合 db.createCollection('post')
  或db.posts.insert({name:'liyuexi',age:'24'})

- 查找posts集合中name 为 liyuexi 的一条记录
  ```

   db.posts.find({name:'liyuexi'})
  ```
- 查询集合中所有数据

  ```
    db.posts.find()
    结果：
    { "_id" : ObjectId("57eb329717d416978a0684b0"), "name" : "liyuexi", "age" : "24", "sex" : "male" }
    { "_id" : ObjectId("57eb340e17d416978a0684b1"), "name" : "ss" }
    { "_id" : ObjectId("57eb36fb17d416978a0684b3"), "name" : "liyuexi", "age" : 23 }

  ```
- 查找满足条件的第一条数据
  ```
  db.posts.findOne({name:'liyuexi'})
  结果：
   {
     "_id" : ObjectId("57eb329717d416978a0684b0"),
     "name" : "liyuexi",
     "age" : "24",
     "sex" : "male"
   }
  ```
- save和insert
    - 相同点：都可以插入
    ```
    db.posts.insert({name:'mengmeng1'})
    db.posts.save({name:'mengmeng2'})
    ```
    - 不同点：save还可以对指定记录进行修改
    ```
      db.posts.save({ "_id" : ObjectId("57eb340e17d416978a0684b1"), "name" : "mengmengs" })
      提示：WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
    ```
- 删除一个集合
  ```
  db.集合名.drop
  ```
  - 查看有posts集合中有多少条记录 db.posts.count()

- 删除worker集合里name是fJianZhou的所有Document数据
  ```
  db.worker.remove({name:'fJianZhou'})
  ```
- 删除person集合里name是xiaoHong的第一条数据
  ```
  db.person.remove({name:"xiaoHong"},{justOne:true})
  db.person.remove({name:"xiaoHong"},1)
  ```
- renameCollection重命名集合
  ```
  db.posts.renameCollection('post')

  ```
- 更新记录,第一个为查询条件，第二个为要更新的数据，若不存在则会在符合此条件的对象上，增加一个字段

  ```
  db.collection.update(
   <query>,
   <updateObj>,
   {
     upsert: <boolean>,
     multi: <boolean>
   }
)
  db.posts.update({"_id" : ObjectId("57eb61076827210a785ffd52")},{$set:{agssse:34}})

  ```
$set直接指定更新后的值

query 查询条件,指定要更新符合哪些条件的文档
update 更新后的对象或指定一些更新的操作符

upsert 可选，这个参数的意思是，如果不存在符合条件的记录时是否插入updateObj. 默认是false,不插入。

multi 可选，mongodb 默认只更新找到的第一条记录，如果这个参数为true,就更新所有符合条件的记录。
```
  db.posts.update({age:34},{$set:{agssse:89}},{multi:true})
```
$inc在原基础上累加 为增加，只符合数字的相加
  ```
  db.posts.update({"_id" : ObjectId("57eb61076827210a785ffd52")},{$inc:{agssse:34}})
  ```


### 增

```
  类型：
  var personSchema = mongoose.Schema({
    username: String,
    password: String,
    age: String
  });
  集合名：
  var person = mongoose.model('person',personSchema);
  实体化：
  var xixi  = new person({username:'xixi',password:'liyuexi',age:'24'});
  xixi.save();

```

### 查
```
  //同步执行
  var result = person.find()
  //异步执行（高手所用）
  person.find().exec(function(err,people){
    console.log(people);
  })
  exec 执行的意思，person.find()返回一个对象，这个对象有一个exec方法
```
### 更

```
  xixi.username='meimei';
  xixi.age='21';
  xixi.save();

  Person.findById({_id: '57ecbc43af054c1370ad8d53'}, function(err, person) {
    person.username = 'rrrrrr'
    person.save(function(err){
      console.log('更新了！')
      Person.find().exec(function(err, person) {
        // 异步执行
        console.log(person);
      });
    });
  });
```

### 删

```
Person.findById({_id: '57ecbc43af054c1370ad8d53'}, function(err, person) {
  person.username = 'rrrrrr'
  person.remove(function(err){
    console.log('更新了！')
    Person.find().exec(function(err, person) {
      // 异步执行
      console.log(person);
    });
  });
});

```
