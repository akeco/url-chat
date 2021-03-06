export const setCurrentTab = data => {
    return {
        type: 'SET_TAB',
        data
    }
};

export const showLeftSidebar = data => {
    return {
        type: 'LEFT_SIDEBAR_VISIBILITY',
        data
    }
};

export const enableSoundAction = data => {
    return {
        type: 'ENABLE_SOUND',
        data
    }
};


export const addPrivateMessages = data => {
    return {
        type: 'ADD_PRIVATE_MESSAGES',
        data
    }
};

export const addPrivateRoom = data => {
    return {
        type: 'ADD_PRIVATE_ROOM',
        data
    }
};

export const updateRoomList = data => {
    return {
        type: 'UPDATE_ROOM_LIST',
        data
    }
};


export const loadSpinner = data => {
    return {
        type: 'LOAD_SPINNER',
        data
    }
};

export const updateMessage = data => {
    return {
        type: 'UPDATE_MESSAGE',
        data
    }
};

export const setTemporaryUser = data => {
    return {
        type: 'ADD_TEMP_USER',
        data
    }
};

export const setProfileUser = data => {
    return{
        type: 'PROFILE_USER',
        data
    }
};

export const setSocketObject = data => {
    return{
        type: 'SOCKET_OBJECT',
        data
    }
};

export const updateProfileSocket = data => {
    return{
        type: 'UPDATE_SOCKET',
        data
    }
};

export const insertMessage = data => {
    return{
        type: 'ADD_MESSAGE',
        data
    }
};

export const prependMessages = data => {
  return{
    type: 'PREPEND_MESSAGES',
    data
  }
};

export const prependPrivateMessages = data => {
  return{
    type: 'PREPEND_PRIVATE_MESSAGES',
    data
  }
};

export const showPrependLoader = data => {
  return{
    type: 'SHOW_PREPEND_LOADER',
    data
  }
};

export const addChatMessages = data => {
    return{
        type: 'ADD_CHAT',
        data
    }
};


export const getRooms = data => {
    return{
        type: 'GET_ROOMS',
        data
    }
};

export const joinRefreshRooms = data => {
    return{
        type: 'JOIN_REFRESH_ROOMS',
        data
    }
};

export const activeRoom = data => {
    return{
        type: 'ACTIVE_ROOM',
        data
    }
};

export const updateActiveRoom = data => {
    return{
        type: 'UPDATE_ACTIVE_ROOM',
        data
    }
};

export const closeActiveRoom = data => {
    return{
        type: 'CLOSE_ACTIVE_ROOM',
        data
    }
};

export const sendMessage = data => {
    return {
        type: 'SEND_MESSAGE',
        data
    }
};

export const addNotifyPrivateIdCollection = data => {
    return {
        type: 'ADD_TO_PRIVATE_NOTIFY_COLLECTION',
        data
    }
};
export const deleteFromNotifyCollection = data => {
    return {
        type: 'DELETE_FROM_NOTIFY_COLLECTION',
        data
    }
};