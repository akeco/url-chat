var mongoose = require('mongoose');
var messageModel = require('../models/message');
var { sortBy } = require('lodash');

module.exports = async function (roomID, messagesPart = 1) {
    var result = await messageModel.find({roomSocketID: roomID}, {
        'sender.password': 0,
        'sender.savedSettings': 0,
        'sender.email': 0,
        'receiver.password': 0,
        'receiver.savedSettings': 0,
        'receiver.email': 0,
        'ratingUsers.password': 0,
        'ratingUsers.savedSettings': 0,
        'ratingUsers.email': 0,
    }).sort({created: -1}).skip(messagesPart*10 - 10).limit(10);
    if(result) return sortBy(result, [function(o) { return o.created; }]);
    return;
};