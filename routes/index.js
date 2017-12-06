//require('babel-core/register');
//require('babel-polyfill');
//require('import-export');
var express = require('express'),
    router = express.Router(),
    registrationController = require('../controllers/registrationController'),
    loginController = require('../controllers/loginController'),
    getUser = require('../services/getUser');

//var ReactDOM = require('react-dom/server');
//var ReactApp = require('../public/javascripts/react/Main');


/* GET home page. */

router.get('/', function(req, res, next) {
  //  var appString = ReactDOM.renderToString(<ReactApp />);
    res.render('index', { title: 'Chat-project' });
});


router.post('/user', function(req, res, next) {
  (async ()=>{
    var result = await getUser(req.body.data);
    if(result) res.status(200).json(result);
  })();
});



router.route("/register")
    .get(function (req, res, next) {
      res.render('index', { title: 'Chat-project' });
})
    .post(registrationController, function (req, res, next) {
      if(req.result) res.status(200).json(req.result);
});



router.route("/login")
    .get(function (req, res, next) {
  res.render('index', { title: 'Chat-project' });
})
    .post(loginController, function (req, res, next) {
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
