var mongoose = require('mongoose');
var userModel = require('../models/user');

module.exports = async function(data) {
    var result = await userModel.findOne({_id: data._id});
    result.socketID = data.socketID;
    result = await result.save();
    return result;
};