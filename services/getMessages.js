var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (roomID) {
    var result = await messageModel.find().where('roomSocketID').equals(roomID);
    return result;
};