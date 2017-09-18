var mongoose = require('mongoose');
var roomModel = require('../models/room');
var { find } = require('lodash');
const util = require('util');

module.exports = async function (data) {

    var result = await roomModel.findOne({_id: `${data.room._id}`});
    var existUser = find(result.members, function(o) { return o._id == `${data.user._id}` });

    if(!existUser){
        var room = await roomModel.findOneAndUpdate({_id: data.room._id}, { $push: { members: data.user } }, {new: true});
        if(room) {
            return room;
        }
    }
};