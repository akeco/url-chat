var mongoose = require('mongoose');
var roomModel = require('../models/room');
var _ = require('lodash');

module.exports = async function (data) {
    var result = '';
    try {
        result = await roomModel.findOne({_id: `${data.room._id}`});
    }
    catch (err){
        Console.info("Error",err);
    }
    finally {
        var existUser = _.find(result.members, function(o) { return o._id == `${data.user._id}` });

        if(!existUser){
            result.members.push(data.user);
            try {
                result = await result.save();
            }
            catch (err){
                console.info("Error",err);
            }
            finally {
                return result;
            }
        }
        return;
    }
};