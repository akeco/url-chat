const util = require('util');
var axios = require('axios');

module.exports = async function (url) {
    const fallBack = "https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00167-Abstract-spiral-globe-logo-design-free-online-logomaker-01.png";

    url = (url.indexOf("www.") != -1) ? url.split("www.")[1] : url;
    url = (url.indexOf("://") != -1) ? url.split("://")[1] : url;
    url = (url.indexOf("/") != -1) ? url.split("/")[0] : url;
    url = (url.indexOf("?") != -1) ? url.split("?")[0] : url;

    try{
        var result = await axios.get(`https://icons.better-idea.org/allicons.json?url=${url}&formats=png`);
        if(result){
            if(result.data.icons){
                console.info(result.data.icons[0].url);
                return result.data.icons[0].url;
            }
        }
        else return fallBack;
    }
    catch(err){
        return fallBack;
    }
};