var mongoose = require('mongoose');
var privateMessage = require('../models/privateMessage');
var { sortBy } = require('lodash');

module.exports = async function (roomID, messagesPart = 1) {
    var result = await privateMessage.find({privateRoomID: roomID}, {
        'sender.password': 0,
        'sender.savedSettings': 0,
        'sender.email': 0
    }).sort({created: -1}).skip(messagesPart*10 - 10).limit(10);
    if(result) return sortBy(result, [function(o) { return o.created; }]);
    return;
};