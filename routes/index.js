var express = require('express');
var router = express.Router();
var getUser = require('../services/getUser');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat-project' });
});


router.post('/user', function(req, res, next) {
  (async ()=>{
    var result = await getUser(req.body.data);
    res.status(200).json(result);
  })();
});


router.get('/register', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

/*
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Chat-project' });
});
*/

module.exports = router;
