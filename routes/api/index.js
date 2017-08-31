var express = require('express');
var router = express.Router();
var { registration } = require('../../services/registration');

router.post('/user/save', function (req, res, next) {
    (async()=>{
        var profile = await registration(req.body.data.user);
        res.status(200).json(profile);
    })();
});

module.exports = router;