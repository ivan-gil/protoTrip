var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var libs = process.cwd() + '/libs/';
var Location = require(libs + 'model/location');

var Path  = new Schema({
	way: [],
	userName: { type: String, required: true }
});

module.exports = mongoose.model('Path', Path);
