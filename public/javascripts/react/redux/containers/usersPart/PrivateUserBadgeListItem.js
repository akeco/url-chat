import React, {Component} from 'react';
import {amber500, tealA100, teal500, teal300, teal50, lime500} from 'material-ui/styles/colors';
import Account from 'material-ui/svg-icons/Action/account-circle';
import MessageIcon from 'material-ui/svg-icons/Editor/mode-comment';
import {ListItem} from 'material-ui/List';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPrivateRoom, deleteFromNotifyCollection, showLeftSidebar} from '../../actions/index';

class PrivateUserBadgeListItem extends Component{
    constructor(props){
        super(props);
        this.addPrivateChat = this.addPrivateChat.bind(this);
        this.deleteNotification = this.deleteNotification.bind(this);
    }

    deleteNotification(user){
        this.props.deleteFromNotifyCollection(user._id);
    }

    addPrivateChat(user){
        this.props.addPrivateRoom(user);
        this.props.socketIO.emit("joinPrivate", {
            sender: this.props.profileuser._id,
            receiver: user._id,
            users: [this.props.profileuser, user]
        });
    }

    render(){
        var {item, checkNotifications} = this.props;
        return(
            <ListItem
                key={item._id}
                className="userListItem"
                hoverColor={'rgba(0,0,0,0.025)'}
                primaryText={item.username}
                style={style.listItem}
                innerDivStyle={style.innerDiv}
                onTouchTap={()=>{
                    this.addPrivateChat(item);
                    this.deleteNotification(item);
                    this.props.showLeftSidebar(false);
                }}
                leftIcon={
                    <Account style={style.avatar}/>
                }
                rightIcon={
                    <div style={style.notificationRightBlock}>
                        <MessageIcon style={style.messageIcon}/>
                        <span style={style.notificationNumber}>{checkNotifications.length}</span>
                    </div>
                }
            />
        );
    }
};

const style = {
    badgeInnerStyle: {
        top: -24,
        left: -8
    },
    badgeStyle: {
        top: 15,
        right: 14,
        fontSize: 10,
        width: 20,
        height:20,
        backgroundColor: amber500,
        color: 'white'
    },
    avatar: {
        fill: teal500,
        width: 30,
        height: 30,
        margin: 8
    },
    contact:{
        fill: teal50
    },
    listItem:{
        borderBottom: `1px solid ${tealA100}`,
        color: teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14
    },
    innerDiv:{
        padding: '15px 16px 15px 65px',
    },
    contactBtn: {
        width: 46,
        height: 46,
        marginRight: -4,
        backgroundColor: teal300
    },
    notificationRightBlock: {
        width: 46,
        height: 46,
        margin: 0,
        marginRight: -4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    notificationNumber: {
        position: 'absolute',
        top: 13,
        fontSize: 11,
        color: 'white',
    },
    messageIcon: {
        fill: lime500,
        height: 30,
        width: 30,
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPrivateRoom,
        deleteFromNotifyCollection,
        showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(PrivateUserBadgeListItem);