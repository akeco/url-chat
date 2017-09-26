var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function (receiverID) {
    var result = await userModel.findOne({_id: receiverID});
    var {socketID} = result;
    if(socketID) return socketID;
};