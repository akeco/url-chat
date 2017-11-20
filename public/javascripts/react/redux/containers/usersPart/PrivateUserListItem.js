import React, {Component} from 'react';
import {tealA100, teal500, teal300, teal50} from 'material-ui/styles/colors';
import Account from 'material-ui/svg-icons/Action/account-circle';
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
                    this.props.showLeftSidebar(false);
                }}
            />
        );
    }

};

const style = {
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
        fontSize: 14,
    },
    innerDiv:{
        padding: '15px 16px 15px 65px',
    },
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