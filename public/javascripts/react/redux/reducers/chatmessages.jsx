import _ from 'lodash';

const chatmessages = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            if(state.length){
                var chatIndex = _.findIndex(state, function(o) { return o.room._id == action.data.receiver._id; });
                if(chatIndex >= 0){
                    return state.map((item, index) => {
                        if (index == chatIndex) {
                            return {
                                room: action.data.receiver,
                                messages: [...item.messages, action.data]
                            }
                        }
                        return item;
                    });
                }
                else{
                    return concatMessage(state, action);
                }
            }
            else{
                console.info("CHECK", action.data);
                return concatMessage(state, action);
            }

        case 'ADD_CHAT':
            if(!_.find(state, function(o) { return o.room._id == action.data.receiver._id; })){
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