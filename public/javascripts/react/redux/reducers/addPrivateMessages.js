import {find, uniqWith, isEqual} from 'lodash';

const addPrivateMessages = (state = null, action) => {
    switch (action.type) {
        case 'ADD_PRIVATE_MESSAGES':
            if(action.data == null) return null;

            if(!state) {
                return {
                    privateRoomID: action.data.privateRoomID,
                    messagesNumber: action.data.messagesNumber || 1,
                    messages: action.data.messages || [action.data]
                }
            }
            else{
                return {
                    privateRoomID: state.privateRoomID,
                    messagesNumber: state.messagesNumber + 1,
                    messages: uniqWith([...state.messages, action.data], isEqual)
                };
            }
        case 'PREPEND_PRIVATE_MESSAGES':
            return {
                privateRoomID: state.privateRoomID,
                messagesNumber: state.messagesNumber,
                messages: uniqWith([...action.data, ...state.messages], isEqual)
            };
        default:
            return state;
    }
};

export default addPrivateMessages;