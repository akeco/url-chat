import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {insertMessage} from '../../actions/index';
import IconButton from 'material-ui/IconButton';
import Emoticon from 'material-ui/svg-icons/editor/insert-emoticon';
import '../../../../stylesheets/less/register.less';

class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isTyping: false,
            inputValue: ''
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.notifyTyping = this.notifyTyping.bind(this);
        this.isTyping = this.isTyping.bind(this);
        this.showTypingInfo = this.showTypingInfo.bind(this);
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    componentWillMount(){
        this.props.socketIO.on('isTyping', this.isTyping);
    }

    sendMessage(event){
        event.preventDefault();
        var receiver = this.props.activeuser.socketID;
        if(this.refs.message.getValue()){
            var createdTime = new Date().getTime();
            this.props.socketIO.emit("sendMessage",{
                userID: receiver,
                sender: this.props.profileuser,
                message: {
                    user: this.props.profileuser,
                    text: this.refs.message.getValue(),
                    created: createdTime
                }
            });


            this.props.insertMessage({
                sender: this.props.activeuser,
                message: {
                    user: this.props.profileuser,
                    text: this.refs.message.getValue(),
                    created: createdTime
                }
            });


            this.setState({
                inputValue: ''
            });

            this.refs.message.setState({
                hasValue: false
            });
        }
    }

    notifyTyping(value){
        if(this.props.activeuser){
            setTimeout(()=>{
                if(value != this.refs.message.getValue()){
                    this.props.socketIO.emit("notifyTyping", {
                        value: true,
                        to: this.props.activeuser.socketID,
                        typingUser: this.props.profileuser.socketID
                    });
                }
                else{
                    this.props.socketIO.emit("notifyTyping", {
                        value: false,
                        to: this.props.activeuser.socketID,
                        typingUser: this.props.profileuser.socketID
                    });
                }
            }, 500);
        }
    }


    isTyping(data){
        if(this.props.activeuser){
            if(data.typingUser == this.props.activeuser.socketID){
                this.setState({
                    isTyping: data.value
                });
            }
        }
    }

    showTypingInfo(){
        return (this.state.isTyping) ?
            <span className="typeNotification" style={style.typeNotification}>Typing...</span> : '';
    }


    inputOnChange(event){
        this.setState({
            inputValue: event.target.value
        });

        if (this.searchTimeout != undefined) clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(this.notifyTyping(this.refs.message.getValue()), 250);
    }

    render(){
        return(
            <div className="footer" style={style.footer}>
                {this.showTypingInfo()}
                <div className="messageForm">
                    <form action="javascript:void(0)" onSubmit={this.sendMessage}>
                        <div className="emoticonButtonBlock">
                            <IconButton>
                                <Emoticon/>
                            </IconButton>
                        </div>
                        <TextField
                            hintText="Type a message..."
                            multiLine={true}
                            value={this.state.inputValue}
                            rowsMax={3}
                            ref="message"
                            fullWidth={true}
                            inputStyle={style.textfield.inputStyle}
                            textareaStyle={style.textfield.inputStyle}
                            hintStyle={style.textfield.hintStyle}
                            underlineFocusStyle={{borderColor:'darkgray'}}
                            onChange={this.inputOnChange}
                        />
                        <div>
                            <FloatingActionButton
                                mini={true}
                                type="submit"
                                backgroundColor="dimgray"
                                style={style.FloatingActionButton.button}
                            >
                                <ContentSend
                                    style={style.FloatingActionButton.icon}
                                />
                            </FloatingActionButton>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

var style={
    footer: {
      position: 'relative'
    },
    typeNotification: {
        position: 'absolute',
        left: 76,
        top: -26,
        color: 'rgba(255,255,255,0.9)',
        fontSize: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: '5px 12px',
        borderRadius: 15
    },
    textfield:{
        inputStyle: {
            color: 'rgba(0,0,0,0.7)',
            fontSize: '14px'
        },
        hintStyle: {
            color: 'rgba(0,0,0,0.4)',
            fontSize: '14px'
        }
    },
    FloatingActionButton: {
        button: {
            marginLeft:10,
            marginTop:3
        },
        icon: {
            fill:'white'
        }
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        insertMessage: insertMessage
        //activeUser: activeUser
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        activeuser: state.activeuser,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        chatMessages: state.chatmessages
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(MessageForm);