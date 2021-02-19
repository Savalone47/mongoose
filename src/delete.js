const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/test';

mongoose.connect(url,{ useNewUrlParser: true}, () => {
   User.remove({lastname: "Patrick"}, (err) => {
      if (err) console.log("ERROR: ", err);
      User.find({lastname: "Steven"}, console.log);
   });
});
const userSchema = Schema({
    firstname: String
    , lastname: String
});
const User = mongoose.model('User', userSchema);
