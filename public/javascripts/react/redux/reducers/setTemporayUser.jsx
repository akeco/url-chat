const setTemporaryUser = (state = null, action) => {
    switch (action.type) {
        case 'ADD_TEMP_USER':
            return action.data;
        default:
            return state;
    }
}

export default setTemporaryUser;