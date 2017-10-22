import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SendIcon from 'material-ui/svg-icons/content/send';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {teal900, teal700, teal500, teal200, teal50} from 'material-ui/styles/colors';
import {find} from 'lodash';
import '../../../../../stylesheets/less/messageForm.less';

class MessageForm extends Component{
    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            inputValue: ''
        };
        this.inputOnChange = this.inputOnChange.bind(this);
        this.submitOnEnter = this.submitOnEnter.bind(this);
    }

    sendMessage(event){
        event.preventDefault();
        var {tab} = this.props;
        if(tab == 0){
            if(this.state.inputValue.trim()){
                this.props.socketIO.emit("sendMessage",{
                    room: this.props.activeRoom,
                    sender: this.props.profileuser,
                    message: {
                        user: this.props.profileuser,
                        text: this.state.inputValue.trim(),
                        created: new Date().getTime()
                    }
                });
            }
        }
        else if(tab == 1){
            var receiver = find(this.props.privateRoom.users, (o)=>{return o._id != this.props.profileuser._id});
            var createdTime = new Date().getTime();
            if(this.state.inputValue.trim()){
                this.props.socketIO.emit("sendPrivateMessage",{
                    sender: this.props.profileuser,
                    privateRoomID: this.props.privateRoom.privateRoomID,
                    receiverID: (receiver._id) && receiver._id || '',
                    message: {
                        text: this.state.inputValue.trim(),
                        created: createdTime
                    },
                    created: createdTime
                });
            }
        }
        this.setState({
            inputValue: ''
        })
    }

    inputOnChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    submitOnEnter(event){
        if (event.key === 'Enter') {
            this.sendMessage(event);
        }
    }

    render(){
        var {tab, privateRoom} = this.props;
        return(
            <div style={style.wrapper}>
                <form
                    action="javascript:void(0)"
                    className={(!this.props.activeRoom || (tab == 1 && !privateRoom)) ? 'disabledForm' : ''}
                    style={style.form}
                    onSubmit={this.sendMessage}
                >
                    <TextField
                        value={this.state.inputValue}
                        hintText="Type message..."
                        multiLine={true}
                        rowsMax={2}
                        style={{width: '100%', fontSize: 14}}
                        textareaStyle={{color: teal900}}
                        underlineFocusStyle={{borderColor: teal200}}
                        hintStyle={{color: teal200}}
                        onChange={this.inputOnChange}
                        onKeyPress={this.submitOnEnter}
                    />
                    <FloatingActionButton
                        type="submit"
                        mini={true}
                        style={{marginLeft: 15}}
                        backgroundColor={teal500}
                        onTouchTap={this.sendMessage}
                    >
                        <SendIcon/>
                    </FloatingActionButton>
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
        backgroundColor: 'white',
        height: 55,
        width: '100%',
        marginBottom: 88,
        borderTop: '1px solid rgba(0,0,0,0.03)'
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
        border: '2px solid white',
        height: 60,
        fontSize: 16,
        boxSizing: 'border-box',
        flexGrow: 1,
        fontSize: 14,
        color: teal700,
        resize: 'none',
        padding: '10px 20px',
        lineHeight: '20px',
        backgroundColor:  'transparent'
    },
    addIcon: {
        fill: 'white'
    },
    sendIcon:{
        fill: teal700
    },
    buttonStyle: {
        height: 60,
        border: '2px solid white',
        borderRight: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        minWidth: 60
    },
    sendButtonStyle: {
        height: 60,
        border: '2px solid white',
        borderLeft: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        minWidth: 60,
        backgroundColor: teal50
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

export default connect(mapStateToProps)(MessageForm);