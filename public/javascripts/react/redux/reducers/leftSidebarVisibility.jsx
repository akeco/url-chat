const leftSidebarVisibility = (state = true, action) => {
    switch (action.type) {
        case 'LEFT_SIDEBAR_VISIBILITY':
            return action.data;
        default:
            return state;
    }
};

export default leftSidebarVisibility;