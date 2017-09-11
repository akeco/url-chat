var mongoose = require('mongoose');
var roomModel = require('../models/room');
var { sort_by } = require('./utils');
var _ = require('lodash');
const util = require('util');

module.exports = async function () {

    var result = await roomModel.find({members: {$not: {$size: 0}}});

    if(result){
        result = result.sort(sort_by('members', false, function(a){return a.length}));

        var filteredResult = _.groupBy(result, function (item) {
            return item.name
        });

        var filteredArray = [];

        for (var key of Object.keys(filteredResult)) {
            var obj = {};
            obj.name = key;
            obj.image = null;
            var members = 0;
            filteredResult[key].forEach((item)=>{
                members += item.members.length;
                if(item.image && !obj.image) obj.image = item.image;
            });
            obj.membersNumber = members;

            obj.rooms = [...filteredResult[key]];

            filteredArray.push(obj);
        }

        return filteredArray;
    }

};