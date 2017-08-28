const activeuser = (state = null, action) => {
    switch (action.type) {
        case 'ACTIVE_USER':

            return action.data;
        default:
            return state;
    }
}



export default activeuser;