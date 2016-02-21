/*mongo.js*/
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb');

var Schema = mongoose.Schema;

var Login = mongoose.model('login', new Schema({
  title: String,
  body: String,
  data: { type: Date, default: Date.now}
  })
);

var obj = new Login();
obj.title = 'Login';
obj.body = '田中暁';
console.log(obj);

obj.save(function (err) {
  if (err) throw err;
});
