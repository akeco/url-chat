var mongoose = require('mongoose');
var roomModel = require('../models/room');
var randomstring = require('randomstring');

module.exports = async function (data) {
    var newRoom = new roomModel({
        name: data,
        roomID: randomstring.generate(10)
    });

    var room = await newRoom.save();
    return room;
};