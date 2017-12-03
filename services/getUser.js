var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function (data) {
    var result = await userModel.findOne({username: data.username},{
        _id: 1,
        socketID: 1,
        username: 1
    });
    result.socketID = data.socketID;
    result = await result.save();

    if(result) return {_id, username, socketID, savedSettings} = result;
    return;
};