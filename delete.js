const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/test';

mongoose.connect(url,{ useNewUrlParser: true}, function () {
   User.remove({lastname: "Patrick"}, function (err) {
      if (err) console.log("ERROR: ", err);
      User.find({lastname: "Steven"}, console.log);
   });
});
const userSchema = Schema({
    firstname: String
    , lastname: String
});
const User = mongoose.model('User', userSchema);
