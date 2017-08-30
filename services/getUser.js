var mongoose = require('mongoose');
var userModel = require('../models/user');

exports.getUser = async function (data) {
    var result = await userModel.findOne({
        username: data.username
    }, '_id username socketID savedSettings');
    return result;
}