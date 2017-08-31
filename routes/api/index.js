var express = require('express');
var router = express.Router();
var { registration } = require('../../services/registration');
var getActiveRooms = require('../../services/getActiveRooms');

router.post('/user/save', function (req, res, next) {
    (async()=>{
        var profile = await registration(req.body.data.user);
        res.status(200).json(profile);
    })();
});

router.get("/rooms", function (req, res, next) {
    (async ()=>{
        var result = await getActiveRooms();
        res.status(200).json(result);
    })();
});

module.exports = router;