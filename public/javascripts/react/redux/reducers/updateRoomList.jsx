const updateRoomList = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_ROOM_LIST':

            return action.data;
        default:
            return state;
    }
}



export default updateRoomList;