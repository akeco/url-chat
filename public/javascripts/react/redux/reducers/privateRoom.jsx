const privateRoom = (state = null, action) => {
    switch (action.type) {
        case 'ADD_PRIVATE_ROOM':
            return action.data;
        default:
            return state;
    }
};

export default privateRoom;