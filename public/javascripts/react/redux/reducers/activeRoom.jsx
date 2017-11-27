import {find} from 'lodash';

const activeuser = (state = null, action) => {
    switch (action.type) {
        case 'ACTIVE_ROOM':
            return action.data;
        case 'UPDATE_ACTIVE_ROOM':
            if(action.data.length){
                var room = find(action.data, (o) => o.name == state.name);
                if(room){
                    var matchRoom = find(room.rooms, (o) => o.roomID == state.roomID);
                    if(matchRoom) return matchRoom;
                }
            }
            else if(state && action.data && action.data.roomID == state.roomID) return action.data;
            return state;
        case 'CLOSE_ACTIVE_ROOM':
            return null;
        default:
            return state;
    }
};

export default activeuser;