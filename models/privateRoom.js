var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const privateRoomSchema = new Schema({
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
    }
});

module.exports = mongoose.model('privateRoom', privateRoomSchema);