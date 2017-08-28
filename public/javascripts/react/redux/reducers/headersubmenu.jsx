const headersubmenu = (state = false, action) => {
    switch (action.type) {
        case 'HEADER_SUBMENU':
            return action.data;
        default:
            return state;
    }
}



export default headersubmenu;