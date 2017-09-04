var randomstring = require('randomstring');
var passwordHash = require('password-hash');
var userModel = require('../models/user');

module.exports = async function (data) {
    var newUser =  new userModel ({
        username: data.username,
        password: passwordHash.generate('pass'),
        socketID: data.socketID
    });

    var userObject = {};
    user = await newUser.save();

    if(user){
        userObject = {
            _id: user._id,
            username: user.username,
            socketID: user.socketID,
            savedSettings: user.savedSettings
        };
        return userObject;
    }
    return;
};