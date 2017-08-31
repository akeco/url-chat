export const toggleUsersMenu = data => {
    return {
        type: 'TOGGLE_USER_MENU',
        data
    }
}

export const swipePage = data => {
    return {
        type: 'SWIPE_PAGE',
        data
    }
}

export const showHeaderSubmenu = data => {
    return {
        type: 'HEADER_SUBMENU',
        data
    }
}

export const addUser = data => {
    return {
        type: 'ADD_USER',
        data
    }
}


export const updateRoomList = data => {
    return {
        type: 'UPDATE_ROOM_LIST',
        data
    }
}


export const setTemporaryUser = data => {
    return {
        type: 'ADD_TEMP_USER',
        data
    }
}

export const setProfileUser = data => {
    return{
        type: 'PROFILE_USER',
        data
    }
}

export const setSocketObject = data => {
    return{
        type: 'SOCKET_OBJECT',
        data
    }
}

export const updateProfileSocket = data => {
    return{
        type: 'UPDATE_SOCKET',
        data
    }
}

export const insertMessage = data => {
    return{
        type: 'ADD_MESSAGE',
        data
    }
}

export const addChatMessages = data => {
    return{
        type: 'ADD_CHAT',
        data
    }
}

export const updateMessageStatus = data => {
    return{
        type: 'MESSAGE_STATUS',
        data
    }
}

export const clearConversation = data => {
    return{
        type: 'CLEAR_CONVERSATION',
        data
    }
}

export const setUsers = data => {
    return{
        type: 'GET_USERS',
        data
    }
}

export const activeUser = data => {
    return{
        type: 'ACTIVE_USER',
        data
    }
}

export const sendMessage = data => {
    return {
        type: 'SEND_MESSAGE',
        data
    }
}