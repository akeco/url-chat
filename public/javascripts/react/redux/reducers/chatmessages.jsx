import {findIndex, find} from 'lodash';

const chatmessages = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE':
            if(state){
                return {
                    room: state.room,
                    messagesNumber: state.messagesNumber,
                    messages: state.messages.map((message)=>{
                        if(message._id == action.data._id) {
                            message = action.data;
                        }
                        return message;
                    })
                };
            }

        case 'CLOSE_ACTIVE_ROOM':
            return null;

        case 'ADD_MESSAGE':
            if(state) {
                return {
                    room: state.room,
                    messagesNumber: state.messagesNumber + 1,
                    messages: [...state.messages, action.data]
                };
            }
            else return {
                room: action.data.receiver,
                messageNumber: 1,
                messages: [action.data]
            };

        case 'ADD_CHAT':
            if(action.data){
                return {
                    room: action.data.receiver,
                    messagesNumber: action.data.messagesNumber || null,
                    messages: [...action.data.messages]
                };
            }
            return false;

        case 'PREPEND_MESSAGES':
            return {
                room: state.room,
                messagesNumber: state.messagesNumber,
                messages: [...action.data, ...state.messages]
            };

        default:
            return state;
    }
};

export default chatmessages;