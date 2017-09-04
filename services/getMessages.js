var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (roomID) {
    var result = '';
    try{
        result = await messageModel.find().where('roomSocketID').equals(roomID);
    }
    catch (err){
        Console.info("Error",err);
    }
    finally {
        return result;
    }
};