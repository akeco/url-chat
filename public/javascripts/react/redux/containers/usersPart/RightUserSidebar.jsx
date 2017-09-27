import React, {Component} from 'react';
import {teal900, teal800, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Account from 'material-ui/svg-icons/Action/account-circle';
import ArrowBack from 'material-ui/svg-icons/Navigation/arrow-back';
import CloseIcon from 'material-ui/svg-icons/Navigation/close';
import {find} from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage, toggleUsersMenu, addPrivateRoom} from '../../actions/index';
import UserFormContainer from '../userForm/UserFormContainer';
import PrivateMessagesContainer from './PrivateMessagesContainer';
import PrivateMessageForm from './PrivateMessageForm';
import PrivateUserListItem from './PrivateUserListItem';
import PrivateUserBadgeListItem from './PrivateUserBadgeListItem';
import '../../../../../stylesheets/less/userSidebarMenu.less';

class RightUserSidebar extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
        this.showMembers = this.showMembers.bind(this);
        this.showMessagesAndForm = this.showMessagesAndForm.bind(this);
        this.closeChat = this.closeChat.bind(this);
        this.addPrivateChat = this.addPrivateChat.bind(this);
    }

    goBack(){
        this.props.swipePage(1);
    }

    toggleUserMenu(){
        this.props.toggleUsersMenu(false);
    }

    addPrivateChat(user){
        this.props.addPrivateRoom(user);
        this.props.socketIO.emit("joinPrivate", {
            sender: this.props.profileuser._id,
            receiver: user._id,
            users: [this.props.profileuser, user]
        });
    }

    closeChat(){
        this.props.addPrivateRoom(null);
    }

    showMembers(){
        if(this.props.activeRoomState && !this.props.privateRoom){
            var activeRoom = find(this.props.rooms, (o)=>{ return o.name == this.props.activeRoomState.name; });
            if(activeRoom) {
                activeRoom = find(activeRoom.rooms, (o)=>{ return o.route == this.props.activeRoomState.route });
                if(activeRoom){
                    return activeRoom.members.map((item)=>{
                        if(item._id != this.props.profileuser._id){
                            var checkNotifications = [];
                            if(this.props.privateNotifyCollection.length){
                                checkNotifications = this.props.privateNotifyCollection.filter((userID)=>{ return userID == item._id });
                            }
                            if(checkNotifications.length){
                                return(
                                    <PrivateUserBadgeListItem key={item._id} item={item} checkNotifications={checkNotifications} />
                                );
                            }
                            else{
                                return(
                                    <PrivateUserListItem key={item._id} item={item} />
                                );
                            }
                        }
                    });
                }
            }
        }
    }


    showMessagesAndForm(){
        if(this.props.privateRoom && this.props.privateRoom.users){
            var receiver = this.props.privateRoom.users.filter((item)=> item.username != this.props.profileuser.username);
            if(receiver.length){
                var {username} = receiver[0];
                return(
                    <div style={style.innerWrapper}>
                        <ListItem
                            className="singleUserItem"
                            primaryText={username}
                            style={style.listItemSingle}
                            innerDivStyle={style.innerDiv}
                            leftIcon={
                                <Account
                                    style={style.avatar}
                                />
                            }
                            rightIconButton={
                                <IconButton
                                    className="contactBtn"
                                    iconStyle={style.contact}
                                    tooltip="Close chat"
                                    tooltipPosition="top-left"
                                    onTouchTap={this.closeChat}
                                >
                                    <CloseIcon/>
                                </IconButton>
                            }
                        />
                        <PrivateMessagesContainer/>
                        <PrivateMessageForm/>
                    </div>
                );
            }
        }
    }

    render(){
        var existActivePrivateRoom = (!this.props.privateRoom) ? 'privateListWrapper' : 'hiddenList';
        var toggleMenuStyle = (this.props.showUserMenuValue) ? 300 : 0;
        return(
            <div className="rightUserMenu" style={ Object.assign({
                minWidth: toggleMenuStyle
            }, style.wrapper )}>
                <div style={{height: '100%', overflowY:'hidden'}}>
                    <div style={style.sidebarHeader}>
                        <IconButton
                            style={style.arrowButton}
                            iconStyle={style.icons}
                            onTouchTap={this.goBack}
                            className="messagesBack"
                        >
                            <ArrowBack hoverColor="white"/>
                        </IconButton>
                        <IconButton
                            style={style.arrowButton}
                            iconStyle={style.icons}
                            className="closeRightMenu"
                            onTouchTap={this.toggleUserMenu}
                        >
                            <CloseIcon hoverColor="white"/>
                        </IconButton>
                        <UserFormContainer/>
                    </div>
                    <div style={style.contentWrapper}>
                        <List
                            className={existActivePrivateRoom}
                            style={style.list}
                        >
                            {
                                this.showMembers()
                            }
                        </List>
                        {
                            this.showMessagesAndForm()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    innerWrapper: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column'
    },
    contentWrapper:{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    avatar: {
        fill: teal50
    },
    contact:{
        fill: teal50
    },
    arrowButton: {
        marginLeft: -15
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0
    },
    innerDiv:{
        padding: '15px 16px 15px 65px',
        textShadow: '0 1px 1px rgba(0,0,0,0.2)'
    },
    listItemSingle: {
        color: teal50,
        fontSize: 14,
        fontWeight: 300,
        backgroundColor: teal800,
        border: '1px solid rgba(255,255,255,0.15)',
        marginBottom: 3,
        position: 'relative',
        marginBottom: 0
    },
    listItem:{
        color: teal50,
        fontSize: 14,
        fontWeight: 300,
        backgroundColor: teal800,
        border: '1px solid rgba(255,255,255,0.15)',
        marginBottom: 3,
        position: 'relative'
    },
    wrapper: {
        height: '100%',
        width: 0,
        backgroundColor: teal900,
    },
    sidebarHeader: {
        width: '100%',
        height: 60,
        display: 'flex',
        padding: '10px 18px',
        boxSizing: 'border-box',
        alignItems: 'center'
    },
    icons:{
        color: teal50,
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        swipePage: swipePage,
        toggleUsersMenu: toggleUsersMenu,
        addPrivateRoom: addPrivateRoom,
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        showUserMenuValue: state.toggleUserMenu,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        privateRoom: state.privateRoom,
        rooms: state.rooms,
        privateNotifyCollection: state.privateNotifyCollection
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(RightUserSidebar);