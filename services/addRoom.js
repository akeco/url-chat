var mongoose = require('mongoose');
var roomModel = require('../models/room');
var randomstring = require('randomstring');

module.exports = async function (data) {
    try {
        var room = await roomModel.findOne({route: data.url});
        if (!room) {
            var newRoom = new roomModel({
                name: data.url,
                roomID: randomstring.generate(10),
                image: data.image && data.image || null
            });

            newRoom.members.push(data.user);

            room = await newRoom.save();
            if (room) return room;
        }
        else {
            room = await roomModel.findOneAndUpdate({route: data.url}, {$push: {members: data.user}}, {new: true});
            if (room) {
                return room;
            }
        }
    }
    catch(err){
        room = await roomModel.findOneAndUpdate({route: data.url.toLowerCase()}, {$push: {members: data.user}}, {new: true});
        if (room) {
            return room;
        }
    }
};