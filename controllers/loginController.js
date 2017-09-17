var login = require('../services/login');
var {validateEmail} = require('../services/utils');

module.exports = async (req, res, next)=>{
    var {email, password} = req.body.data;
    if(validateEmail(email) && password){
        try{
            var result = await login({email, password});
            if(result){
                req.result = result;
                next();
            }
        }
        catch(err){
            console.info("Login error");
            next(err);
        }
    }
    else next(true);
};