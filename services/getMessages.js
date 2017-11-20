var mongoose = require('mongoose');
var messageModel = require('../models/message');
var { sortBy } = require('lodash');

module.exports = async function (roomID, messagesPart = 1) {
    var result = await messageModel.find().where('roomSocketID').equals(roomID).sort({created: -1}).skip(messagesPart*10 - 10).limit(10);
    if(result) return sortBy(result, [function(o) { return o.created; }]);
    return;
};