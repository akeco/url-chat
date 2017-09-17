var register = require('../services/customRegistration');
var {validateEmail} = require('../services/utils');

module.exports = async (req, res, next)=>{
    var {username, email, password, confirmPass, socketID} = req.body.data;
    if(username && validateEmail(email) && password && confirmPass && password == confirmPass){
        try{
            var result = await register({username, email, password, socketID});
            if(result){
                req.result = result;
                next();
            }
        }
        catch(err){
            console.info("Registration error");
            next(err);
        }
    }
    else next(true);
};