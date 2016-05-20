var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Location = new Schema({
	name: { type: String/*, required: true */},
	lat: { type: String/*, required: true */},
	lon: { type: String/*, required: true */},
  description: { type: String/*, required: true */},
	modified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', Location);
