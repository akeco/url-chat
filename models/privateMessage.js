var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const privateMessageSchema = new Schema({
    sender: {
        type: Object
    },
    privateRoomID: {
        type: String,
        required: true
    },
    message: {
        type: Object
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('privateMessage', privateMessageSchema);