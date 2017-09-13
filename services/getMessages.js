var mongoose = require('mongoose');
var messageModel = require('../models/message');
var _ = require('lodash');

module.exports = async function (roomID) {
    var result = await messageModel.find().where('roomSocketID').equals(roomID);
    if(result) return _.sortBy(result, [function(o) { return o.created; }]);
    return;
};