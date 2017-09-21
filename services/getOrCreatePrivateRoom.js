var mongoose = require('mongoose');
var privateMessageModel = require('../models/privateMessage');
var randomstring = require('randomstring');

module.exports = async function (data) {
    var result = await privateMessageModel.findOne({users: {$all: [data.sender, data.receiver]}});
    if(!result){
        var newRoom = new privateMessageModel({
            users: [data.sender, data.receiver],
            privateRoomID: randomstring.generate(30)
        });

        result = await newRoom.save();
        if(result){
            console.info("Created room", result);
            return result;
        }
    }
    else {
        console.info("Room exist", result);
        return result;
    }

    /*
    if(!room){
        var newRoom = new roomModel({
            name: data.url,
            roomID: randomstring.generate(10),
            image: data.image && data.image || null
        });

        newRoom.members.push(data.user);

        room = await newRoom.save();
        if(room) return room;
    }
    else{
        room = await roomModel.findOneAndUpdate({route: data.url}, { $push: { members: data.user } }, {new: true});
        if(room) {
            return room;
        }
    }
    */
};