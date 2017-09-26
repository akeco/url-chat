import {find} from 'lodash';

const addPrivateUser = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRIVATE_MESSAGES':
            if(state.length){
                var index = find(state, (o)=>{ return o.privateRoomID == action.data.privateRoomID});
                if(!index){
                    return [...state, action.data]
                }
                else if(!action.data.messages){
                    return state.map((item)=>{
                        if(item.privateRoomID == action.data.privateRoomID) item.messages = [...item.messages, action.data];
                        return item;
                    });
                }
            }
            else{
                if(action.data.messages) return [...state, action.data];
                else{
                    return [...state, {
                        privateRoomID: action.data.privateRoomID,
                        messages: [action.data]
                    }];
                }
            }
        default:
            return state;
    }
};

export default addPrivateUser;