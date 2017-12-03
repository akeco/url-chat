var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function (receiverID) {
    var result = await userModel.findOne({_id: receiverID}, {'_id': 1, 'username': 1, 'socketID': 1});
    var {socketID} = result;
    if(socketID) return socketID;
};