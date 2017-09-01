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
    roomSocketID: {
      type: String
    },
    message: {
        type: Object,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('messages', messageSchema);