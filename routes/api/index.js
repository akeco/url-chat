var express = require('express');
var router = express.Router();
var registration = require('../../services/registration');
var getActiveRooms = require('../../services/getActiveRooms');
var getMessages = require('../../services/getMessages');
var updateSocketID = require('../../services/updateSocketID');
var getUser = require('../../services/getUser');

router.post('/user/save', function (req, res, next) {
    (async()=>{
        var profile = await registration(req.body.data.user);
        if(profile) res.status(200).json(profile);
    })();
});

router.get("/rooms", function (req, res, next) {
    (async ()=>{
        var result = await getActiveRooms();
        if(result) res.status(200).json(result);
    })();
});

router.get("/messages/:roomID", function (req, res, next) {
    (async ()=>{
        var result = await getMessages(req.params.roomID);
        if(result) res.status(200).json(result);
    })();
});

router.post("/update/socket", function (req, res, next) {
    (async ()=>{
        var result = await updateSocketID(req.body.data);
        if(result) res.status(200).json(result);
    })();
});


module.exports = router;