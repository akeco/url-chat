import {find, uniqWith, isEqual} from 'lodash';

const addPrivateUser = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRIVATE_MESSAGES':
            if(state.length){
                var index = find(state, (o)=>{ return o.privateRoomID == action.data.privateRoomID});
                if(!index){
                    return uniqWith([...state, {
                        privateRoomID: action.data.privateRoomID,
                        messages: [...action.data.messages]
                    }], isEqual);
                }
                else if(!action.data.messages){
                    return state.map((item)=>{
                        if(item.privateRoomID == action.data.privateRoomID) item.messages = uniqWith([...item.messages, action.data], isEqual)
                        return item;
                    });
                }
            }
            else{
                if(action.data.messages) {
                    return uniqWith([...state, action.data], isEqual);
                }
                else{
                    return uniqWith([...state, {
                        privateRoomID: action.data.privateRoomID,
                        messages: [action.data]
                    }], isEqual);
                }
            }
        default:
            return state;
    }
};

export default addPrivateUser;