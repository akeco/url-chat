const toggleUsersMenu = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_USER_MENU':
            return action.data;
        default:
            return state;
    }
}



export default toggleUsersMenu;