exports.sort_by = function(field, reverse, primer){
    var key = function (x) {return primer ? primer(x[field]) : x[field]};

    return function (a,b) {
        var A = key(a), B = key(b);
        return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];
    }
};

exports.primaryTextFunction = function(text, size){
    if($(window).innerWidth() > 575 && text.length >= size){
        return text.split("").slice(0,size).join("")+"...";
    }
    else return text;
};