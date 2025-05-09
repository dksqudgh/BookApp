var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , pageName: "home.ejs" });
});

//Login Page
router.get('/', function(req, res, next) {
  res.render('index', { title: '로그인' ,pageName: 'auth/login.ejs'});
});
module.exports = router;
