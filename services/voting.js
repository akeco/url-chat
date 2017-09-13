var mongoose = require('mongoose');
var messageModel = require('../models/message');

module.exports = async function (data) {
    switch(data.vote){
        case 'up':
            var message = await messageModel.findOne({_id: data.messageID, "ratingUsers._id": data.user._id});
            if(message) message = await messageModel.findOneAndUpdate({_id: data.messageID}, { $pull: { ratingUsers: { _id: data.user._id }}, $inc: {rating:1}}, {new: true});
            else message = await messageModel.findOneAndUpdate({_id: data.messageID}, { $push: { ratingUsers: data.user }, $inc: {rating:1} }, {new: true});
            if(message) return message;
            break;
        case 'down':
            var message = await messageModel.findOne({_id: data.messageID, "ratingUsers._id": data.user._id});
            if(message) message = await messageModel.findOneAndUpdate({_id: data.messageID}, { $pull: { ratingUsers: { _id: data.user._id }}, $inc: {rating:-1}}, {new: true});
            else message = await messageModel.findOneAndUpdate({_id: data.messageID}, { $push: { ratingUsers: data.user }, $inc: {rating:-1} }, {new: true});
            if(message) return message;
            break;
    }
};