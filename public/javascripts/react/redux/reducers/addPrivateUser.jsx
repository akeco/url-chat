const addPrivateUser = (state = null, action) => {
    switch (action.type) {
        case 'ADD_PRIVATE_USER':
            return action.data;
        default:
            return state;
    }
};

export default addPrivateUser;