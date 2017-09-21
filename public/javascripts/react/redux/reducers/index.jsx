import { combineReducers } from 'redux';
import rooms from './rooms';
import activeRoom from './activeRoom';
import profileuser from './profileuser';
import socketobject from './socketobject';
import chatmessages from './chatmessages';
import swipepage from './swipepage';
import headersubmenu from './headersubmenu';
import setTemporayUser from './setTemporayUser';
import spinner from './spinner';
import toggleUsersMenu from './toggleUsersMenu';
import addPrivateUser from './addPrivateUser';

const reducers = combineReducers({
    toggleUserMenu: toggleUsersMenu,
    pageIndex: swipepage,
    headerSubmenuState: headersubmenu,
    temporaryUser: setTemporayUser,
    spinner: spinner,
    rooms: rooms,
    activeRoom: activeRoom,
    profileuser: profileuser,
    socketobject: socketobject,
    chatmessages: chatmessages,
    privateUser: addPrivateUser,
});

export default reducers;