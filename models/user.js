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
        type: String,
        default: Date.now
    },
    savedSettings: {
        notifications: {
            type: Array,
            default: null
        },
        favourites: Array
    },
    socketID: {
        type: String,
        default: null
    }
});


module.exports = mongoose.model('users', userSchema);