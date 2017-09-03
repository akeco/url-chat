var mongoose = require('mongoose');
var roomModel = require('../models/room');
var _ = require('lodash');

module.exports = async function (data) {

    var result = await roomModel.findOne({_id: `${data.room._id}`});
    var existUser = _.find(result.members, function(o) { return o._id == `${data.user._id}` });

    if(!existUser){
        result.members.push(data.user);
        result = await result.save();
        return result;
    }
    return;

};