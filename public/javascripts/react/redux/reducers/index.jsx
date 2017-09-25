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
import toggleUserMenu from './toggleUsersMenu';
import privateMessages from './addPrivateMessages';
import privateRoom from './privateRoom';
import privateNotification from './privateNotification';

const reducers = combineReducers({
    toggleUserMenu,
    pageIndex: swipepage,
    headerSubmenuState: headersubmenu,
    temporaryUser: setTemporayUser,
    spinner,
    rooms,
    activeRoom,
    profileuser,
    socketobject,
    chatmessages,
    privateMessages,
    privateRoom,
    privateNotification
});

export default reducers;