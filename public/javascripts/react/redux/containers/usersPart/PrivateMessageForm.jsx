import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/Content/add';
import Send from 'material-ui/svg-icons/Content/send';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import {teal800, teal700, teal600, teal400, teal50} from 'material-ui/styles/colors';
import { find } from 'lodash';
import '../../../../../stylesheets/less/messageForm.less';

class PrivateMessageForm extends Component{
    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(event){
        event.preventDefault();
        var receiver = find(this.props.privateRoom.users, (o)=>{return o._id != this.props.profileuser._id});
        var createdTime = new Date().getTime();
        if(this.refs.message.value.trim()){
            this.props.socketIO.emit("sendPrivateMessage",{
                sender: this.props.profileuser,
                privateRoomID: this.props.privateRoom.privateRoomID,
                receiverID: (receiver._id) && receiver._id || '',
                message: {
                    text: this.refs.message.value.trim(),
                    created: createdTime
                },
                created: createdTime
            });
            this.refs.message.value = "";
        }
    }

    render(){
        return(
            <div style={style.wrapper}>
                <form
                    className="membersMessageForm"
                    action="javascript:void(0)"
                    style={style.form}>
                    <textarea
                        style={Object.assign(style.inputText)}
                        ref="message"
                        placeholder="Type message..."
                    />
                    <FlatButton
                        onTouchStart={this.sendMessage}
                        style={style.sendButtonStyle}
                        onTouchTap={this.sendMessage}
                        icon={<Send
                            style={style.sendIcon}
                        />}
                    >
                        <input type="submit" style={style.uploadInput} />
                    </FlatButton>
                </form>
            </div>
        );
    }
}

var style = {
    disabled: {
        opacity: '0.3',
        pointerEvents: 'none'
    },
    wrapper: {
        backgroundColor: teal800,
        height: 90,
        width: '100%',
        //marginBottom: 101
    },
    uploadButton: {
        verticalAlign: 'middle',
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    form: {
        display:'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    inputText: {
        outline:'none',
        border: '2px solid',
        borderColor: teal400,
        height: 60,
        fontSize: 16,
        boxSizing: 'border-box',
        flexGrow: 1,
        fontSize: 14,
        color: teal50,
        resize: 'none',
        padding: '10px 10px',
        lineHeight: '20px',
        backgroundColor:  'transparent'
    },
    addIcon: {
        fill: 'white'
    },
    sendIcon:{
        fill: teal50
    },
    buttonStyle: {
        height: 60,
        border: '2px solid',
        borderColor: teal400,
        borderRight: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        minWidth: 60
    },
    sendButtonStyle: {
        height: 60,
        border: '2px solid',
        borderColor: teal400,
        borderLeft: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        minWidth: 60,
        backgroundColor: teal600
    }
};


function mapStateToProps(state) {
    return ({
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom
    });
}

export default connect(mapStateToProps)(PrivateMessageForm);