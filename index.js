var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/express-api');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we're connected success!");
   var personSchema = mongoose.Schema({
     username: String,
     password: String,
     age: String
   });
   var Person = mongoose.model('person',personSchema);
  //var xixi  = new person({username:'xixi',password:'liyuexi',age:'24'});
  //  xixi.username='meimei';
  //  xixi.age='21';
  //  xixi.save();
  //  console.log(xixi);
  //  //异步执行
  //  Person.find().exec(function(err,people){
  //    console.log(people);
  //  })

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
});
