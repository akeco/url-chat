import React, {Component} from 'react';
import {tealA100, teal500, teal300, teal50, orangeA700} from 'material-ui/styles/colors';
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
                hoverColor={'rgba(0,0,0,0.025)'}
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
                        style={style.contactBtn}
                        className="contactBtn"
                        iconStyle={style.contact}
                        tooltip="Private chat"
                        tooltipPosition="top-left"
                        onTouchTap={()=>{
                            this.addPrivateChat(item);
                            this.deleteNotification(item);
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
        fill: teal500
    },
    contact:{
        fill: teal50
    },
    listItem:{
        borderBottom: `1px solid ${tealA100}`,
        color: teal500,
        fontWeight: 300,
        position: 'relative',
        fontSize: 16
    },
    innerDiv:{
        padding: '15px 16px 15px 65px',
    },
    contactBtn: {
        width: 46,
        height: 46,
        marginRight: -4,
        backgroundColor: teal300
    }
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