const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/test';

mongoose.connect(url,{ useNewUrlParser: true}, () => {
	const user1 = new User({firstname: "John", lastname: "Patrick"});
	user1.save((err) => {
		if (err) console.log('Error', err);
		console.log(user1);
	});
});
const userSchema = Schema({
	firstname: String,
	lastname: String
});
const User = mongoose.model('User', userSchema);