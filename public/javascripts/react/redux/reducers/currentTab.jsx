const currentTab = (state = 0, action) => {
    switch (action.type) {
        case 'SET_TAB':
            return action.data;
        default:
            return state;
    }
};

export default currentTab;