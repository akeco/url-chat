const profileuser = (state = null, action) => {
    switch (action.type) {
        case 'PROFILE_USER':
            return action.data;
        case 'UPDATE_SOCKET':
            var thisState = state;
            thisState.socketID = action.data;
            return thisState;
        default:
            return state;
    }
}


export default profileuser;