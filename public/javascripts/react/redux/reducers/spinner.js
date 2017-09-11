const spinner = (state = false, action) => {
    switch (action.type) {
        case 'LOAD_SPINNER':
            return action.data;
        default:
            return state;
    }
}

export default spinner;