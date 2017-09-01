var mongoose = require('mongoose');
var roomModel = require('../models/room');
var _ = require('lodash');

module.exports = async function () {
    var sort_by = function(field, reverse, primer){
        var key = function (x) {return primer ? primer(x[field]) : x[field]};

        return function (a,b) {
            var A = key(a), B = key(b);
            return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];
        }
    }

    var result = await roomModel.find();
    result = result.sort(sort_by('members', false, function(a){return a.length}));
    return result;
};