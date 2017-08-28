const swipepage = (state = 0, action) => {
    switch (action.type) {
        case 'SWIPE_PAGE':
            return action.data;
        default:
            return state;
    }
}



export default swipepage;