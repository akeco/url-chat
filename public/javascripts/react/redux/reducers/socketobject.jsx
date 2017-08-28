const socketobject = (state = null, action) => {
    switch (action.type) {
        case 'SOCKET_OBJECT':
            return action.data;
        default:
            return state;
    }
}

export default socketobject;