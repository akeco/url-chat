var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (roomID) {
    console.info("PARAMETAR",roomID);
    var result = await messageModel.find().where('roomSocketID').equals(roomID);
    console.info("RESULT",result);
    if(result) return result;
    return;
};