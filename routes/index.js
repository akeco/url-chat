var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

router.get('/register', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

module.exports = router;
