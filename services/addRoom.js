var mongoose = require('mongoose');
var roomModel = require('../models/room');
var randomstring = require('randomstring');

module.exports = async function (data) {

    var newRoom = new roomModel({
        name: data.url,
        roomID: randomstring.generate(10)
    });
    newRoom.members.push(data.user);
    
    var room = await newRoom.save();

    return room;
};