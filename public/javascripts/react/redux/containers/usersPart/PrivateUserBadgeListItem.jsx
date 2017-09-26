import React, {Component} from 'react';
import {teal800, teal50, orangeA700} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Account from 'material-ui/svg-icons/Action/account-circle';
import Contact from 'material-ui/svg-icons/Communication/chat';
import {ListItem} from 'material-ui/List';
import Badge from 'material-ui/Badge';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPrivateRoom, deleteFromNotifyCollection} from '../../actions/index';

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
                primaryText={item.username}
                style={style.listItem}
                innerDivStyle={style.innerDiv}
                onTouchTap={()=>{
                    this.addPrivateChat(item)
                    this.deleteNotification(item);
                }}
                leftIcon={
                    <Badge
                        badgeContent={checkNotifications.length}
                        badgeStyle={style.badgeStyle}
                        style={style.badgeInnerStyle}
                    >
                        <Account
                            style={style.avatar}
                        />
                    </Badge>
                }
                rightIconButton={
                    <IconButton
                        className="contactBtn"
                        iconStyle={style.contact}
                        tooltip="Private chat"
                        tooltipPosition="top-left"
                        onTouchTap={()=>{
                            this.addPrivateChat(item);
                        }}
                    >
                        <Contact/>
                    </IconButton>
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
        backgroundColor: orangeA700,
        color: 'white'
    },
    avatar: {
        fill: teal50
    },
    contact:{
        fill: teal50
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
    innerDiv:{
        padding: '15px 16px 15px 65px',
        textShadow: '0 1px 1px rgba(0,0,0,0.2)'
    },
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPrivateRoom,
        deleteFromNotifyCollection
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(PrivateUserBadgeListItem);