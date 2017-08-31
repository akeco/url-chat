const activeuser = (state = null, action) => {
    switch (action.type) {
        case 'ACTIVE_ROOM':
            return action.data;
        case 'CLOSE_ACTIVE_ROOM':
            return null;
        default:
            return state;
    }
}



export default activeuser;