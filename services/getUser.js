var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function (data) {
    var result = await userModel.findOne({username: data.username});
    result.socketID = data.socketID;
    try {
        result = await result.save();
    }
    catch (err){
        Console.info("Error",err);
    }
    finally {
        return {_id, username, socketID, savedSettings} = result;
    }
};