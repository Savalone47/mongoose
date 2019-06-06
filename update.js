const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/test';

mongoose.connect(url,{ useNewUrlParser: true}, function () {
    User.update({lastname: "Patrick"}, {lastname: "Steven"}, {multi: true}, function (err) {
        if (err) console.log("ERRor", err);
        User.find({}, console.log);
    })
});
const userSchema = Schema({
    firstname: String
    , lastname: String
});
const User = mongoose.model('User', userSchema);

