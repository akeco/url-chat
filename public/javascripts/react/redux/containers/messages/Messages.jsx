import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Account from 'material-ui/svg-icons/Action/account-circle';
import Message from '../../../components/message/Message';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, insertMessage, updateMessageStatus} from '../../actions/index';
import randomstring from 'randomstring';
import moment from 'moment';
import ActiveUserContainer from '../users/ActiveUserContainer';
import { Observable, BehaviorSubject } from 'rxjs';
//import triggerWindowState from '../../../components/utils/WindowFocus';
import '../../../../../stylesheets/less/messages.less';

class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            windowFocus: true
        };
        this.showMessages = this.showMessages.bind(this);
       // this.showActiveUser = this.showActiveUser.bind(this);
        //this.receiveMessage = this.receiveMessage.bind(this);
        this.displayCorrectListItem = this.displayCorrectListItem.bind(this);
        //this.includeMessageStatus = this.includeMessageStatus.bind(this);
        //this.handleMessageStatus = this.handleMessageStatus.bind(this);
        //this.setWebNotification = this.setWebNotification.bind(this);
        //this.receiveMessageHandleLogic = this.receiveMessageHandleLogic.bind(this);
    }

/*
    componentWillMount(){
        this.props.socketIO.on('receiveMessage', this.receiveMessage);
        this.props.socketIO.on('messageStatus', this.handleMessageStatus);
        this.setWebNotification();
        //this.activeSubject = new BehaviorSubject(this.props.activeusesr);
    }
*/

/*
    componentDidMount(){
        triggerWindowState(this, this.props.socketIO, this.props.activeuser);
    }

    */

/*
    setWebNotification(){
        if (Notification.permission === "granted") {
           // this.notification = new Notification(this.state.windowFocus);
        }

        else if (Notification.permission !== "denied") {
            Notification.requestPermission();
        }
    }
*/


    showMessages(){
        /*
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
        */
    }


    displayCorrectListItem(item, index, userMessagesIndex){
        return <ListItem
                    primaryText={'Text'}
                    //secondaryText={moment(item.created).fromNow()}
                    leftIcon={<Account/>}
                    style={ style.messageItem }
                    innerDivStyle={{padding:'12px 16px'}}
                />

    }


    /*
    handleMessageStatus(status){
        var activeReciverID = this.props.activeuser._id;
        var userMessagesIndex = _.findIndex(this.props.chatMessages, function(o) { return o.sender._id == activeReciverID; });
        this.props.updateMessageStatus({
            userMessagesIndex : userMessagesIndex,
            status: status
        });
    }
    */

    /*
    includeMessageStatus(index, userMessagesIndex){
        const messageStatus = this.props.chatMessages[userMessagesIndex].messages[this.props.chatMessages[userMessagesIndex].messages.length - 1].status;
        if(messageStatus){
            return (index == (this.props.chatMessages[userMessagesIndex].messages.length-1)) ? messageStatus : '';
        }
    }
    */

    /*
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
    */

    /*
    receiveMessage(data){
        console.info("GOT MESSAGE",data);
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
    */

/*
    showActiveUser(){
        return (this.props.activeuser) ? <ActiveUserContainer/> : '';
    }
*/

    render(){
        return(
            <div style={style.outerDivBlock}>
                {//this.showActiveUser()
                     }
                <div className="messagesListWrapper" style={style.messagesListWrapper} >
                    <List>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                    </List>
                </div>
            </div>
        );
    }
}

/*
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
*/

var style = {
    outerDivBlock:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column'
    },
    messagesList: {
        lineHeight: '13px',
        padding: '5px 5px 8px'
    },
    messagesListWrapper: {
        overflowY: 'scroll',
        overflowX: 'hidden',
        flexGrow: 1,
        paddingTop: 15
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

//export default connect(mapStateToProps, matchDispatchToProps)(Messages);
export default Messages;