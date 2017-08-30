var randomstring = require('randomstring');
var passwordHash = require('password-hash');
var userModel = require('../models/user');

exports.registration = async function (data) {
    var newUser =  new userModel ({
        username: data.username,
        password: passwordHash.generate('pass'),
        socketID: data.socketID
    });

    var userObject = {};
    try{
        user = await newUser.save();
        userObject = {
            _id: user._id,
            username: user.username,
            socketID: user.socketID
        };
    }
    catch(err){
        console.info("Error",err);
    }
    finally {
        return userObject;
    }
};