const privateNotification = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRIVATE_NOTIFICATION':
            return [...state, action.data];
        default:
            return state;
    }
};

export default privateNotification;