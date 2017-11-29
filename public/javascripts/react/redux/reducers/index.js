import { combineReducers } from 'redux';
import rooms from './rooms';
import activeRoom from './activeRoom';
import profileuser from './profileuser';
import socketobject from './socketobject';
import chatmessages from './chatmessages';
import setTemporayUser from './setTemporayUser';
import spinner from './spinner';
import privateMessages from './addPrivateMessages';
import privateRoom from './privateRoom';
import privateNotifyCollection from './privateNotifyCollection';
import leftSidebarVisibility from './leftSidebarVisibility';
import currentTab from './currentTab';
import enableSound from './enableSound';
import prependLoader from './prependLoader';

const reducers = combineReducers({
    temporaryUser: setTemporayUser,
    spinner,
    rooms,
    activeRoom,
    profileuser,
    socketobject,
    chatmessages,
    privateMessages,
    privateRoom,
    privateNotifyCollection,
    leftSidebarVisibility,
    currentTab,
    enableSound,
    prependLoader
});

export default reducers;