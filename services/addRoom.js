var mongoose = require('mongoose');
var roomModel = require('../models/room');
var randomstring = require('randomstring');
var _ = require('lodash');

module.exports = async function (data) {
    var newRoom = new roomModel({
        name: data.url,
        roomID: randomstring.generate(10)
    });

    newRoom.members.push(data.user);

    var room='';
    try{
       room = await newRoom.save();
    }
    catch (err){
        console.info("Room save problem");
        room = await roomModel.findOne({route: data.url});

        var existUser = _.find(room.members, function(o) { return o._id == `${data.user._id}` });
        if(!existUser){
            room.members.push(data.user);
            room = await room.save();
        }
    }
    finally {
        return room;
    }
};