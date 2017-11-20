const prependLoader = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_PREPEND_LOADER':
            return action.data;
        default:
            return state;
    }
};

export default prependLoader;