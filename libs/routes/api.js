var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();

var libs = process.cwd() + '/libs/';

var log = require(libs + 'log')(module);
var User = require(libs + 'model/user');

/* GET users listing. */
router.use(express.static('public'));

router.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

router.post('/register/', function(req, res) {
  console.log("register");
  console.log(req.body);
	var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err, user) {
        if(!err) {
            log.info("New user - %s:%s", user.username, user.password);
            return res.json({
      				status: 'OK',
      			  user: user
      			});
        } else {
            log.error(err);
            return res.json({
      				status: 'Failed'
      			});
        }
    });
})

module.exports = router;
