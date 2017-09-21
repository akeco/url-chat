var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const privateMessageSchema = new Schema({
    usersID: {
        type: Array,
        required: true
    },
    users: {
        type: Array,
        required: true
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