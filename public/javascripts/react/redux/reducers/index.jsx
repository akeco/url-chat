import { combineReducers } from 'redux';
import rooms from './users';
import activeuser from './activeuser';
import profileuser from './profileuser';
import socketobject from './socketobject';
import chatmessages from './chatmessages';
import swipepage from './swipepage';
import headersubmenu from './headersubmenu';
import setTemporayUser from './setTemporayUser';
import updateRoomList from './updateRoomList';

import toggleUsersMenu from './toggleUsersMenu';

const reducers = combineReducers({
    toggleUserMenu: toggleUsersMenu,
    pageIndex: swipepage,
    headerSubmenuState: headersubmenu,
    temporaryUser: setTemporayUser,
    updateRoomList: updateRoomList,

    rooms: rooms,
    activeuser: activeuser,
    profileuser: profileuser,
    socketobject: socketobject,
    chatmessages: chatmessages
});

export default reducers;