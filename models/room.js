var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomID: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        required: true
    },
    messages: {
        type: Array
    }
});

module.exports = roomModel = mongoose.model('rooms', roomSchema);