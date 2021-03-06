var mongoose = require('mongoose');
var roomModel = require('../models/room');
var {sort_by} = require('../services/utils');

module.exports = async function (data) {

    if(data instanceof Object){
        var result = await roomModel.update({_id: data.room._id}, { $pull: {members: {_id: data.user._id} }}, {
            fields: {
                'members.password': 0,
                'members.savedSettings': 0,
                'members.email': 0,
                'members.created': 0
            },
            new: true
        });
        if(result){
            return result;
        }
        return;
    }
    else{
        try{
            await roomModel.update({ members : {$elemMatch : {socketID : data}}}, { $pull: {members: {socketID : data} }});
            return;
        }
        catch (err){
            console.info("LEAVING ERROR")
        }
    }

};