var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    savedSettings: {
        notifications: {
            type: Array,
            default: []
        },
        favourites: {
            type: Array,
            default: []
        }
    },
    socketID: {
        type: String,
        default: null
    }
});


module.exports = mongoose.model('users', userSchema);