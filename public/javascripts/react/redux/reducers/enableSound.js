const enableSound = (state = true, action) => {
    switch (action.type) {
        case 'ENABLE_SOUND':
            return action.data;
        default:
            return state;
    }
};

export default enableSound;