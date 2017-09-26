const privateNotifyCollection = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_PRIVATE_NOTIFY_COLLECTION':
            return [...state, action.data];
        case 'DELETE_FROM_NOTIFY_COLLECTION':
            return state.filter((itemID)=>{return itemID != action.data});
        default:
            return state;
    }
};

export default privateNotifyCollection;