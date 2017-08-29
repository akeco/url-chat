var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: {
        type: Object,
        required: true
    },
    receiver: {
        type: Object
    },
    roomID: {
      type: String
    },
    message: {
        type: Object,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = messageModel = mongoose.model('messages', messageSchema);