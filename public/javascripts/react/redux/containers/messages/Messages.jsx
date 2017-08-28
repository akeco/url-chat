import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/Social/person';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, insertMessage, updateMessageStatus} from '../../actions/index';
import HeaderBlock from '../../../components/messagess/HeaderBlock';
import randomstring from 'randomstring';
import moment from 'moment';
import ActiveUserContainer from '../users/ActiveUserContainer';
import { Observable, BehaviorSubject } from 'rxjs';
import triggerWindowState from '../../../components/utils/WindowFocus';

class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            windowFocus: true
        };
        this.showMessages = this.showMessages.bind(this);
        this.showActiveUser = this.showActiveUser.bind(this);
        this.receiveMessage = this.receiveMessage.bind(this);
        this.displayCorrectListItem = this.displayCorrectListItem.bind(this);
        this.includeMessageStatus = this.includeMessageStatus.bind(this);
        this.handleMessageStatus = this.handleMessageStatus.bind(this);
        this.setWebNotification = this.setWebNotification.bind(this);
        this.receiveMessageHandleLogic = this.receiveMessageHandleLogic.bind(this);
    }


    componentWillMount(){
        this.props.socketIO.on('receiveMessage', this.receiveMessage);
        this.props.socketIO.on('messageStatus', this.handleMessageStatus);
        this.setWebNotification();
        this.activeSubject = new BehaviorSubject(this.props.activeusesr);
        this.activeSubject.subscribe({
            next: (v) =>{
              //  triggerWindowState(this, this.props.socketIO, this.props.activeuser);
            }
        });

    }


    componentDidMount(){
        triggerWindowState(this, this.props.socketIO, this.props.activeuser);
    }

    setWebNotification(){
        if (!("Notification" in window)) {
            //WEB NOTIFICATIONS NOT SUPPORTED
        }

        else if (Notification.permission === "granted") {
           // this.notification = new Notification(this.state.windowFocus);
        }

        else if (Notification.permission !== "denied") {
            Notification.requestPermission();
        }
    }

    showMessages(){
        if(this.props.activeuser){
            var activeReciverID = this.props.activeuser._id;
            var userMessagesIndex = _.findIndex(this.props.chatMessages, function(o) { return o.sender._id == activeReciverID; });
            return this.props.chatMessages[userMessagesIndex].messages.map((item, index)=>{
                return(
                    <div key={randomstring.generate(7)}
                         className={ (item.user._id == this.props.profileuser._id) ? 'rightMessage' : 'leftMessage' }
                    >
                        { this.displayCorrectListItem(item, index, userMessagesIndex) }
                    </div>
                );
            });
        }
    }


    displayCorrectListItem(item, index, userMessagesIndex){
        return (item.user._id != this.props.profileuser._id) ?
                <ListItem
                    primaryText={item.text}
                    secondaryText={moment(item.created).fromNow()}
                    leftAvatar={<Avatar style={style.leftAvatar} size={30} icon={<Person/>}/>  }
                    style={ style.messageItem }
                    innerDivStyle={{padding:'12px 16px'}}
                />
            :
                <ListItem
                    primaryText={item.text}
                    secondaryText={moment(item.created).fromNow()}
                    //statusText="Neki status"
                    statusText={this.includeMessageStatus(index, userMessagesIndex)}
                    rightAvatar={<Avatar style={style.rightAvatar} size={30} icon={<Person/>}/>  }
                    style={ style.messageItemRight }
                    innerDivStyle={{padding:'12px 16px'}}
                />
    }


    handleMessageStatus(status){
        var activeReciverID = this.props.activeuser._id;
        var userMessagesIndex = _.findIndex(this.props.chatMessages, function(o) { return o.sender._id == activeReciverID; });
        this.props.updateMessageStatus({
            userMessagesIndex : userMessagesIndex,
            status: status
        });
    }


    includeMessageStatus(index, userMessagesIndex){
        const messageStatus = this.props.chatMessages[userMessagesIndex].messages[this.props.chatMessages[userMessagesIndex].messages.length - 1].status;
        if(messageStatus){
            return (index == (this.props.chatMessages[userMessagesIndex].messages.length-1)) ? messageStatus : '';
        }
    }

    receiveMessageHandleLogic(data, focus){
        if(this.props.activeuser){
            if(focus){
                if(this.props.activeuser._id == data.sender._id){
                    this.props.socketIO.emit('transferStatus', {
                        status: 'Seen',
                        to: data.sender.socketID
                    });
                }
                else{
                    this.props.socketIO.emit('transferStatus', {
                        status: 'Delivered',
                        to: data.sender.socketID
                    });
                }
            }
            else{
                this.props.socketIO.emit('transferStatus', {
                    status: 'Delivered',
                    to: data.sender.socketID
                });
            }
        }
        else{
            this.props.socketIO.emit('transferStatus', {
                status: 'Delivered',
                to: data.sender.socketID
            });
        }
    }

    receiveMessage(data){
        console.info("PRIMIO",data);
        if(this.state.windowFocus){
            this.receiveMessageHandleLogic(data, true);
        }
        else{
            if(Notification.permission === "granted"){
                var options = {
                    body: data.message.text
                };

                this.notification = new Notification(data.sender.username, options);
            }
            this.receiveMessageHandleLogic(data, false);
        }

        this.props.insertMessage(data);
    }


    showActiveUser(){
        return (this.props.activeuser) ? <ActiveUserContainer/> : '';
    }


    render(){
        return(
            <div style={style.outerDivBlock}>
               <HeaderBlock/>
                {this.showActiveUser()}
                <div className="messagesListWrapper" style={style.messagesListWrapper} >
                    <List style={style.messagesList}>
                        {
                            this.showMessages()
                        }
                    </List>
                </div>
            </div>
        );
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addUser: addUser,
        insertMessage: insertMessage,
        updateMessageStatus: updateMessageStatus
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        users: state.users,
        activeuser: state.activeuser,
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        chatMessages: state.chatmessages
    });
}

var style = {
    outerDivBlock:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column'
    },
    leftAvatar: {
        top:5,
        left:5,
        backgroundColor:'aquamarine'
    },
    rightAvatar: {
        top:5,
        right:5,
        backgroundColor:'aquamarine'
    },
    messagesList: {
        lineHeight: '13px',
        padding: '5px 5px 8px'
       // paddingBottom: 96
    },
    messagesListWrapper: {
        overflowY: 'scroll',
        flexGrow: 1,
        //display: 'flex',
        //flexDirection: 'column'
        //paddingBottom: 35
    },
    messageItem: {
        fontSize: 13,
        display: 'inline-block',
        borderRadius: 5,
        marginBottom: 10,
        borderTopLeftRadius: 0,
        backgroundColor: 'peru'
    },
    messageItemRight:{
        fontSize: 13,
        display: 'inline-block',
        borderRadius: 5,
        marginBottom: 10,
        borderTopRightRadius: 0,
        backgroundColor: 'white',
        color: 'rgba(0,0,0,0.8)'
        //backgroundColor: 'lightslategray'
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Messages);