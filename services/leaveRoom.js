var mongoose = require('mongoose');
var roomModel = require('../models/room');
var _ = require('lodash');
var {sort_by} = require('../services/utils');

module.exports = async function (data) {

    if(data instanceof Object){
        var result = await roomModel.findOne({_id: `${data.room._id}`});
        result.members = _.filter(result.members, function(o) { return o._id !=  `${data.user._id}` });
        result = await result.save();
        return result;
    }
    else{
        var result = await roomModel.find({members: {$not: {$size: 0}}});
        if(result){

            var filtered = '';
            await result.forEach((item)=>{
                _.find(item.members, function(o) {
                    if(o.socketID == data){
                        filtered = item;
                        return item;
                    }
                });
            });

            var roomResult = await roomModel.findOne({_id: `${filtered._id}`});
            roomResult.members = _.filter(roomResult.members, function(o) { return o.socketID !=  `${data}` });
            await roomResult.save();
        }
    }

};