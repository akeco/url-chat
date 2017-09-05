var mongoose = require('mongoose');
var roomModel = require('../models/room');
var _ = require('lodash');
var {sort_by} = require('../services/utils');

module.exports = async function (data) {

    if(data instanceof Object){
        console.info("CLICK",data);
        var result = await roomModel.findOne({_id: `${data.room._id}`});
        result.members = _.filter(result.members, function(o) { return o._id !=  `${data.user._id}` });
        result = await result.save();
        console.info("DATA RESULT");
        if(result) return result;
        return;
    }
    else{
        var result = await roomModel.find({members: {$not: {$size: 0}}});
        if(result){
            var filtered = '';
            result.forEach((item)=>{
                _.find(item.members, function(o) {
                    if(o.socketID == data){
                        filtered = item;
                        return item;
                    }
                });
            });

            var roomResult = await roomModel.findOne({_id: `${filtered._id}`});

            if(roomResult){
                roomResult.members = _.filter(roomResult.members, function(o) { return o.socketID != `${data}` });
                try {
                    await roomResult.save();
                }
                catch (err){
                    console.info("Error",err);
                }
            }
        }
    }

};