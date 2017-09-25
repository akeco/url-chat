var mongoose = require('mongoose');
var privateMessageModel = require('../models/privateMessage');

module.exports = async function (data) {
    var newMessage = new privateMessageModel({
        sender: data.sender,
        privateRoomID: data.privateRoomID,
        message: data.message,
        created: data.created
    });

    var message = await newMessage.save();
    if(message) return message;
    return;
};