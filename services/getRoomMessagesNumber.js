var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (roomID) {
    var result = await messageModel.count({roomSocketID: roomID});
    if(result) return result;
    return;
};