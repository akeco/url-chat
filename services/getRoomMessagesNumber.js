var mongoose = require('mongoose');
var messageModel = require('../models/message'),
    privateMessageModel = require('../models/privateMessage'),
    privateRoomModel = require('../models/privateRoom');

module.exports = async function ({roomID, sender, receiver}, roomType) {

    switch (roomType){
        case 'public':
            if(roomID){
                var result = await messageModel.count({roomSocketID: roomID});
                if(result) return result;
                return;
            }
            return;
        case 'private':
            if(sender && receiver){
                var result = await privateRoomModel.findOne({usersID: {$all: [sender, receiver]}});
                if(result){
                    var numberResult = await privateMessageModel.count({privateRoomID: result.privateRoomID});
                    if(numberResult) return numberResult;
                }
                return;
            }
            return;
    }

};