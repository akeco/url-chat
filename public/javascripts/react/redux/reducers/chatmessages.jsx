import {findIndex, find} from 'lodash';

const chatmessages = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            if(state.length){
                return state.map((room)=>{
                    room.messages = room.messages.map((message)=>{
                        if(message._id == action.data._id) {
                            message = action.data;
                        }
                        return message;
                    });
                    return room;
                });
            }
            break;

        case 'ADD_MESSAGE':
            if(state.length){

                var chatIndex = findIndex(state, function(o) { return o.room._id == action.data.receiver._id; });
                if(chatIndex >= 0){
                    return state.map((item, index) => {
                        if (index == chatIndex) {
                            var existMessage = find(item.messages, function (o) {o._id == action.data._id});
                            if(existMessage == undefined){
                                return {
                                    room: action.data.receiver,
                                    messages: [...item.messages, action.data]
                                }
                            }
                            else return item;
                        }
                        return item;
                    });
                }
                else{
                    return concatMessage(state, action);
                }
            }
            else{
                return concatMessage(state, action);
            }
            break;

        case 'ADD_CHAT':
            if(!find(state, function(o) { return o.room._id == action.data.receiver._id; })){
                return [...state,
                    {
                        room: action.data.receiver,
                        messages: [...action.data.messages]
                    }
                ];
            }
        default:
            return state;
    }
};

function concatMessage(state, action) {
    return [...state, {
        room: action.data.receiver,
        messages: [action.data]
    }];
}

export default chatmessages;