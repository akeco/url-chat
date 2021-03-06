var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function(data) {
    var result = await userModel.findOne({_id: data._id}, {
        _id: 1,
        socketID: 1,
        username: 1
    });
    if(result){
        result.socketID = data.socketID;
        result = await result.save();
        if(result) return result;
    }
    return;
};