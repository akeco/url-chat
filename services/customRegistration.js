var mongoose =  require('mongoose');
var userModel = require('../models/user');
var passwordHash = require('password-hash');

module.exports = async (data)=>{
    var {username, email, password, socketID} = data;
    var result = await userModel.find({$or: [{username: username}, {email: email}]});

    if(!result.length){
        var newUser = new userModel({
            username,
            email,
            socketID,
            password: passwordHash.generate(password)
        });

        result = await newUser.save();
        if(result) return ({
            _id: result._id,
            username: result.username,
            socketID: result.socketID
        });
    }
    else throw new Error("User exist");

};