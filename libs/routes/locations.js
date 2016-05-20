var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var db = require(libs + 'db/mongoose');
var Location = require(libs + 'model/location');

router.get('/', passport.authenticate('bearer', { session: false }), function(req, res) {
        Location.find(function (err, locations) {
		if (!err) {
			return res.json(locations);
		} else {
			res.statusCode = 500;

			log.error('Internal error(%d): %s',res.statusCode,err.message);

			return res.json({
				error: 'Server error'
			});
		}
	});
});

router.post('/', passport.authenticate('bearer', { session: false }), function(req, res) {

	var location = new Location({
		name: req.body.name,
		lat: req.body.lat,
		lon: req.body.lon,
		images: req.body.images,
        description: req.body.description
	});

	location.save(function (err) {
		if (!err) {
			log.info("New location created with id: %s", location.id);
			return res.json({
				status: 'OK',
				location: location
			});
		} else {
			if(err.name === 'ValidationError') {
				res.statusCode = 400;
				res.json({
					error: 'Validation error'
				});
			} else {
				res.statusCode = 500;
				res.json({
					error: 'Server error'
				});
			}
			log.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
});

router.get('/:id', passport.authenticate('bearer', { session: false }), function(req, res) {
	console.log(req.params.id);
	Location.findById(req.params.id, function (err, location) {

		if(!location) {
			res.statusCode = 404;

			return res.json({
				error: 'Not found'
			});
		}

		if (!err) {
			return res.json({
				status: 'OK',
				location: location
			});
		} else {
			res.statusCode = 500;
			log.error('Internal error(%d): %s',res.statusCode,err.message);

			return res.json({
				error: 'Server error'
			});
		}
	});
});

router.put('/:id', passport.authenticate('bearer', { session: false }), function (req, res){
	var locationId = req.params.id;

	Location.findById(locationId, function (err, location) {
		if(!location) {
			res.statusCode = 404;
			log.error('Location with id: %s Not Found', locationId);
			return res.json({
				error: 'Not found'
			});
		}

		location.name = req.body.name;
		location.lat = req.body.lat;
        location.lon = req.body.lon;
        location.images = req.body.images;
        location.description = req.body.description;

		location.save(function (err) {
			if (!err) {
				log.info("Location with id: %s updated", location.id);
				return res.json({
					status: 'OK',
					location: location
				});
			} else {
				if(err.name === 'ValidationError') {
					res.statusCode = 400;
					return res.json({
						error: 'Validation error'
					});
				} else {
					res.statusCode = 500;

					return res.json({
						error: 'Server error'
					});
				}
				log.error('Internal error (%d): %s', res.statusCode, err.message);
			}
		});
	});
});

module.exports = router;
