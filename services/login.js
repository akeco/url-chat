var passwordHash = require('password-hash');
var userModel = require('../models/user');

module.exports = async function (data) {
    var {email, password} = data;
    var user = await userModel.findOne({email: email});
    if(user){
        if(passwordHash.verify(password, user.password)){
            var userObject = {
                _id: user._id,
                username: user.username,
                socketID: user.socketID,
                savedSettings: user.savedSettings
            };
            return userObject;
        }
    }
    return;
};