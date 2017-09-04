var mongoose = require('mongoose');
var roomModel = require('../models/room');
var _ = require('lodash');

module.exports = async function (data) {
    var result = result = await roomModel.findOne({_id: `${data.room._id}`});

    if(result){
        var existUser = _.find(result.members, function(o) { return o._id == `${data.user._id}` });

        if(!existUser){
            result.members.push(data.user);
            result = await result.save();
            if(result) return result;
        }
        return;
    }
};