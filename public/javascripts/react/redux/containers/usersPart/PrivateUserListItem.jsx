import React, {Component} from 'react';
import {tealA100, teal500, teal300, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Account from 'material-ui/svg-icons/Action/account-circle';
import Contact from 'material-ui/svg-icons/Communication/chat';
import {ListItem} from 'material-ui/List';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPrivateRoom, showLeftSidebar} from '../../actions/index';

class PrivateUserListItem extends Component{
    constructor(props){
        super(props);
        this.addPrivateChat = this.addPrivateChat.bind(this);
    }

    addPrivateChat(user){
        if(!this.props.privateRoom){
            this.props.addPrivateRoom(user);
            this.props.socketIO.emit("joinPrivate", {
                sender: this.props.profileuser._id,
                receiver: user._id,
                users: [this.props.profileuser, user]
            });
        }
        else{
            if(this.props.privateRoom.usersID.indexOf(user._id) == -1){
                this.props.addPrivateRoom(user);
                this.props.socketIO.emit("joinPrivate", {
                    sender: this.props.profileuser._id,
                    receiver: user._id,
                    users: [this.props.profileuser, user]
                });
            }
        }

    }

    render(){
        var {item} = this.props;
        return(
            <ListItem
                key={item._id}
                className="userListItem"
                hoverColor={'rgba(0,0,0,0.025)'}
                primaryText={item.username}
                style={style.listItem}
                innerDivStyle={Object.assign(style.innerDiv)}
                leftIcon={ <Account style={style.avatar} /> }
                onTouchTap={()=>{
                    this.addPrivateChat(item);
                    setTimeout(()=>{
                        this.props.showLeftSidebar(false);
                    },1000);
                }}
                rightIconButton={
                    <IconButton
                        style={style.contactBtn}
                        className="contactBtn"
                        iconStyle={style.contact}
                        tooltip="Private chat"
                        tooltipPosition="top-left"
                        onTouchTap={()=>{
                            this.addPrivateChat(item);
                            setTimeout(()=>{
                                this.props.showLeftSidebar(false);
                            },1000);
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
    avatar: {
        fill: teal500
    },
    contact:{
        fill: teal50
    },
    listItem:{
        borderBottom: `1px solid ${tealA100}`,
        color: teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14,
        textTransform: 'uppercase'
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
        showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        privateRoom: state.privateRoom
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(PrivateUserListItem);