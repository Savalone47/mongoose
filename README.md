# Nodejs Express Mongodb[![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

## mongoose CRUD

`````
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = 'mongodb://localhost:27017/test';

mongoose.connect(url,{ useNewUrlParser: true}, function () {
	const user1 = new User({firstname: "John", lastname: "Patrick"});
	user1.save(function(err){
		if (err) console.log('Error', err);
		console.log(user1);
	});
});
const userSchema = Schema({
	firstname: String
	, lastname: String
});
const User = mongoose.model('User', userSchema);

`````
## RUN
1. Run `mongod` and `mongo` serices (If you get any error like connection faild, just create the folder C:\data\db)
2. `npm run dev`: concurrently execute MongoDB, Angular build, TypeScript compiler and Express server.
3. `npm run prod`: run the project with a production bundle and AOT compilation


## Author
* [savalone47](https://github.com/Savalone47)
