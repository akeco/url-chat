var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function (data) {
    /*
    var result = await userModel.findOne({
        username: data.username
    }, '_id username socketID savedSettings');
    */

    var result = await userModel.findOne({username: data.username});
    result.socketID = data.socketID;
    result = await result.save();

    return {_id, username, socketID, savedSettings} = result;
};