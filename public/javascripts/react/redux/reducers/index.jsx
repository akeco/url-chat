import { combineReducers } from 'redux';
import users from './users';
import activeuser from './activeuser';
import profileuser from './profileuser';
import socketobject from './socketobject';
import chatmessages from './chatmessages';
import swipepage from './swipepage';

import toggleUsersMenu from './toggleUsersMenu';

const reducers = combineReducers({
    toggleUserMenu: toggleUsersMenu,
    pageIndex: swipepage,

    users: users,
    activeuser: activeuser,
    profileuser: profileuser,
    socketobject: socketobject,
    chatmessages: chatmessages
});

export default reducers;