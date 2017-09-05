import { sort_by } from '../../../../../services/utils';
import _ from 'lodash';

const users = (state = null, action) => {
    switch (action.type) {
        case 'JOIN_REFRESH_ROOMS':
            var rooms = state.map((item)=>{
                if(item._id == action.data._id) return action.data;
                return item;
            });

             return rooms.sort(sort_by('members', false, function(a){return a.length}));

        case 'UPDATE_ROOM_LIST':
            var exist='';
            state.forEach((item)=>{
                if(item._id == action.data._id) exist = item._id;
            });

            if(exist){
                return state.map((item)=>{
                    if(item._id == exist) item = action.data;
                    return item;
                });
            }
            else return [...state, action.data];

        case 'GET_ROOMS':
            return action.data;
        default:
            return state;
    }
};

export default users;