var mongoose = require('mongoose');
var roomModel = require('../models/room');

module.exports = async function () {
    var result = await roomModel.find();
    return result;
};