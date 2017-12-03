var mongoose = require('mongoose');
var roomModel = require('../models/room');
var { find } = require('lodash');
const util = require('util');

module.exports = async function (data) {

    var result = await roomModel.findOne({_id: `${data.room._id}`}, {
        'members.password': 0,
        'members.savedSettings': 0,
        'members.email': 0,
        'members.created': 0
    });
    var existUser = find(result.members, function(o) { return o._id == `${data.user._id}` });

    if(!existUser){
        var room = await roomModel.findOneAndUpdate({_id: data.room._id}, { $push: { members: data.user } }, {
            fields: {
                'members.password': 0,
                'members.savedSettings': 0,
                'members.email': 0,
                'members.created': 0
            },
            new: true
        });
        if(room) {
            return room;
        }
    }
    return result;
};