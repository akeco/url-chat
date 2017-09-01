var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (data) {
    var newMessage = new messageModel({
        sender: data.sender,
        receiver: data.room,
        roomSocketID: data.room.roomID,
        message: data.message,
        created: data.message.created
    });

    var message = await newMessage.save();
    return message;
};