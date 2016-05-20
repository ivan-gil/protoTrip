var express = require('express');
var passport = require('passport');
var router = express.Router();

var libs = process.cwd() + '/libs/';
var log = require(libs + 'log')(module);

var db = require(libs + 'db/mongoose');
var Path = require(libs + 'model/path');

router.get('/:userName', passport.authenticate('bearer', { session: false }), function(req, res) {
        Path.find({userName: req.params.userName},function (err, pathes) {
		if (!err) {
			return res.json(pathes);
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

  console.log(req.body.way);
  console.log(req.body.userName);

	var path = new Path({
		userName: req.body.userName,
	  way: req.body.way
	});


	path.save(function (err) {
		if (!err) {
			log.info("New path created with id: %s", path.id);
			return res.json({
				status: 'OK',
				path: path
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

	Path.findById(req.params.id, function (err, path) {

		if(!path) {
			res.statusCode = 404;

			return res.json({
				error: 'Not found'
			});
		}

		if (!err) {
			return res.json({
				status: 'OK',
				path: path
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
	var pathId = req.params.id;

	Path.findById(pathId, function (err, path) {
		if(!path) {
			res.statusCode = 404;
			log.error('Path with id: %s Not Found', pathId);
			return res.json({
				error: 'Not found'
			});
		}

		path.userName = req.body.userName;
		path.way = req.body.way;

		path.save(function (err) {
			if (!err) {
				log.info("path with id: %s updated", path.id);
				return res.json({
					status: 'OK',
					path: path
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
