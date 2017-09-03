var mongoose = require('mongoose');
var roomModel = require('../models/room');
var { sort_by } = require('./utils');

module.exports = async function () {

    var result = await roomModel.find({members: {$not: {$size: 0}}});

    result = result.sort(sort_by('members', false, function(a){return a.length}));
    return result;
};