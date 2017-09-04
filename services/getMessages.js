var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (roomID) {
    var result = result = await messageModel.find().where('roomSocketID').equals(roomID);
    if(result) return result;
    return;
};