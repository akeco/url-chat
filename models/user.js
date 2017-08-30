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


userSchema.pre('save', function(next) {
    /*
    mongoose.find({username: this.username}).then((err, response)=>{

    });
    */
    next();
});

var userModel = mongoose.model('users', userSchema);

module.exports = userModel;