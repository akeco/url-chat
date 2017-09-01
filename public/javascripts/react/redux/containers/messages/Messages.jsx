import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Message from '../../../components/message/Message';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {insertMessage} from '../../actions/index';
import randomstring from 'randomstring';
import ActiveUserContainer from '../users/ActiveUserContainer';
import { Observable, BehaviorSubject } from 'rxjs';
//import triggerWindowState from '../../../components/utils/WindowFocus';
import _ from 'lodash';
import $ from 'jquery';
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
        this.getMessage = this.getMessage.bind(this);
        //this.includeMessageStatus = this.includeMessageStatus.bind(this);
        //this.handleMessageStatus = this.handleMessageStatus.bind(this);
        //this.setWebNotification = this.setWebNotification.bind(this);
        //this.receiveMessageHandleLogic = this.receiveMessageHandleLogic.bind(this);
    }

    componentWillMount(){
        this.props.socketIO.on("getMessage", this.getMessage);
    }

    componentDidUpdate(){
        var containerElement = $(document.querySelector(".messagesListWrapper > div"));
        $(document.querySelector(".messagesListWrapper")).animate({scrollTop:containerElement.height(), top}, 500);
    }

    getMessage(data){
        this.props.insertMessage(data);
/*
        var containerElement = $(document.querySelector(".messagesListWrapper > div"));
        $(document.querySelector(".messagesListWrapper")).scrollTop(containerElement.height());
        */
    }


    showMessages(){
        if(this.props.activeRoom && this.props.chatMessages.length){
            var roomObject = _.find(this.props.chatMessages, (o)=>{ return o.room._id == this.props.activeRoom._id; });
            if(roomObject){
                return roomObject.messages.map((item)=>{
                    return <Message key={item._id} message={item} />;
                });
            }
        }
    }



/*
    componentWillMount(){
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


    /*
    showMessages(){

        if(this.props.activeuser){
            var activeReciverID = this.props.activeuser._id;
            var userMessagesIndex = _.findIndex(this.props.chatMessages, function(o) { return o.sender._id == activeReciverID; });
            return this.props.chatMessages[userMessagesIndex].messages.map((item, index)=>{
                return(
                    <div key={randomstring.generate(7)}
                         className={ (item.user._id == this.props.profileuser._id) ? 'rightMessage' : 'leftMessage' }
                    >

                    </div>
                );
            });
        }
    }
     /*



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


    render(){
        return(
            <div style={style.outerDivBlock}>
                <div className="messagesListWrapper" style={style.messagesListWrapper} >
                    <List>
                        {this.showMessages()}
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
        insertMessage: insertMessage
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        insertMessage: insertMessage
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        chatMessages: state.chatmessages
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(Messages);