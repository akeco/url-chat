import { sort_by } from '../../../../../services/utils';
import _ from 'lodash';

const users = (state = null, action) => {
    switch (action.type) {
        case 'JOIN_REFRESH_ROOMS':
            var exist='';
            state.forEach((item)=>{
                if(item.name == action.data.name) exist = item;
            });
            if(exist){
                return state.map((item)=>{
                    if(item.name == exist.name){
                        item.membersNumber = 0;
                        item.rooms = item.rooms.map((room)=>{
                            if(room._id == action.data._id) room = action.data;
                            item.membersNumber += room.members.length;
                            return room;
                        }).sort(sort_by('members', false, function(a){return a.length}));
                    }
                    return item;
                });
            }

        case 'UPDATE_ROOM_LIST':
            var exist='';
            state.forEach((item)=>{
                if(item.name == action.data.name) exist = item.name;
            });

            if(exist){
                return state.map((item)=>{
                    if(item.name == exist){
                        item.rooms.push(action.data);
                        item.membersNumber += action.data.members.length;
                        item.rooms = item.rooms.sort(sort_by('members', false, function(a){return a.length}));
                    }
                    return item;
                });//.sort(sort_by('membersNumber'));
            }
            else{
                return [...state, {
                    name: action.data.name,
                    membersNumber: action.data.members.length,
                    rooms: [action.data]
                }];
            }
        case 'GET_ROOMS':
            return action.data;
        default:
            return state;
    }
};

export default users;