var mongoose = require('mongoose');
var privateRoomModel = require('../models/privateRoom');
var privateMessageModel = require('../models/privateMessage');
var randomstring = require('randomstring');
var { sortBy } = require('lodash');

module.exports = async function (data) {
    var result = await privateRoomModel.findOne({usersID: {$all: [data.sender, data.receiver]}}, {
        'sender.password': 0,
        'sender.email': 0,
        'sender.savedSettings': 0,
    });
    if(!result){
        var newRoom = new privateRoomModel({
            usersID: [data.sender, data.receiver],
            users: data.users,
            privateRoomID: randomstring.generate(30)
        });

        result = await newRoom.save();
        if(result){
            console.info("Created room");
            return {
                room: result
            };
        }
    }
    else {
        console.info("Room exist");
        var messages = await privateMessageModel.find({privateRoomID: result.privateRoomID}, {
            'sender.password': 0,
            'sender.email': 0,
            'sender.savedSettings': 0,
        });
        return {
            room: result,
            messages: {
                privateRoomID: result.privateRoomID,
                messages: sortBy(messages, [function(o) { return o.created; }])
            }
        };
    }
};