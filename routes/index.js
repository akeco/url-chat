var express = require('express');
var router = express.Router();
var registrationController = require('../controllers/registrationController');
var loginController = require('../controllers/loginController');
var getUser = require('../services/getUser');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat-project' });
});


router.post('/user', function(req, res, next) {
  (async ()=>{
    var result = await getUser(req.body.data);
    if(result) res.status(200).json(result);
  })();
});


router.get('/register', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

router.post('/register', registrationController, function (req, res, next) {
  if(req.result) res.status(200).json(req.result);
});

router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

router.post('/login', loginController, function (req, res, next) {
  if(req.result) res.status(200).json(req.result);
});

router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
});

/*
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'Chat-project' });
});
*/

module.exports = router;
