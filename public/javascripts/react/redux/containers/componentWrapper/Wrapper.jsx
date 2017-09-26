import React, {Component} from 'react';
import io from 'socket.io-client';
import {teal600, teal50} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import randomstring from'randomstring';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {updateProfileSocket, setProfileUser, setSocketObject, setTemporaryUser,
    updateRoomList, activeRoom, joinRefreshRooms, addChatMessages, swipePage, loadSpinner,
    insertMessage, updateMessage, addPrivateRoom, addPrivateMessages,
    addNotifyPrivateIdCollection, toggleUsersMenu} from '../../actions/index';

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            openSnackBar: false,
            SnackBarMessage: ''
        };
        this.updateSocketID = this.updateSocketID.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.updateMessageVote = this.updateMessageVote.bind(this);
        this.addPrivateRoom = this.addPrivateRoom.bind(this);
        this.handlePrivateMessage = this.handlePrivateMessage.bind(this);
        this.notifyMessage = this.notifyMessage.bind(this);
    }

    componentDidMount(){
        $(window).on('beforeunload', ()=>{
            if(this.props.activeRoomState){
                this.props.socketIO.emit("leaveRoom", {
                    room: this.props.activeRoomState,
                    user: this.props.profileuser
                });
            }
        });
    }

    componentWillMount(){
        this.socket = io(document.location.host);
        this.props.setSocketObject(this.socket);

        this.socket.on("getMessage", this.getMessage);
        this.socket.on("updateMessageVote", this.updateMessageVote);
        this.socket.on("joinPrivateRoom", this.addPrivateRoom);
        this.socket.on("handlePrivateMessage", this.handlePrivateMessage);
        this.socket.on("notifyMessage", this.notifyMessage);

        this.socket.on('connect', ()=>{
            var socket = this.socket;
            this.props.setTemporaryUser({
                socketID: this.socket.id,
                username: `Guest-${ randomstring.generate(5) }`
            });

            if(!window.localStorage.getItem("currentUser")){
                this.props.history.push("/home");
                return;
            }
            else{
                var user = JSON.parse(window.localStorage.getItem("currentUser"));

                axios.post("/user",{
                    data: {
                        username: user && user.username,
                        socketID: socket.id
                    }
                }).then((response)=>{
                    // RETURNED CURRENTLY LOGGED USER
                    this.props.setProfileUser(response.data);
                }).catch((err)=>{
                    console.info(err);
                });

            }

        });

        this.socket.on('reconnect', ()=>{
            var socket = this.socket;
            var cachedUser = window.localStorage.getItem('currentUser');
            if(cachedUser){
                cachedUser = JSON.parse(cachedUser);
                axios.post("/api/update/socket",{
                    data: {
                        _id: cachedUser._id,
                        socketID: socket.id
                    }
                }).then((response)=>{
                    this.updateSocketID(response.data._id);
                }).catch((err)=>{
                    console.info("Update socket user failed",err);
                });
            }
        });


        this.socket.on('updateRooms', (data)=>{
            this.props.loadSpinner(false);
            this.props.updateRoomList(data);
        });


        this.socket.on('refreshRoomsOnJoin', (data)=>{
                this.props.joinRefreshRooms(data);
            /*
                var containerElement = $(document.querySelector(".messagesListWrapper > div"));
                $(document.querySelector(".messagesListWrapper")).animate({scrollTop:containerElement.height(), top}, 500);
                */
        });

        this.socket.on('addActiveRoom', (data)=>{
            (async ()=>{
                await this.props.activeRoom(data);
                axios.get(`/api/messages/${data.roomID}`).then((response)=>{
                    this.props.addChatMessages({
                        receiver: (this.props.activeRoomState) && this.props.activeRoomState,
                        messages: response.data
                    });

                    if($(window).innerWidth() <= 575){
                        this.props.swipePage(1);
                    }
                }).catch((err)=>{
                    // console.info("error",err);
                });
            })();

        });
    }


    notifyMessage(data){
        var findActivatedChat = null;
        if(this.props.privateRoom){
            findActivatedChat = this.props.privateRoom.usersID.indexOf(data._id);
            console.info("FIND",findActivatedChat);
        }

        if(!this.props.toggleUserMenu){
            this.setState({
                openSnackBar: true,
                SnackBarMessage: `Received private message from ${data.username}`
            });
        }

        if(this.props.privateRoom && findActivatedChat == -1){
            console.info("OTVOREN I NIJE JEDNAK");
            this.props.addNotifyPrivateIdCollection(data._id);
        }
        else if(!this.props.privateRoom){
            this.props.addNotifyPrivateIdCollection(data._id);
        }
    }

    addPrivateRoom(data){
        this.props.addPrivateRoom(data.room);
        if(data.messages) this.props.addPrivateMessages(data.messages);
        setTimeout(()=>{
            var containerElement = $(".privateListContainer");
            containerElement.parent("div").animate({scrollTop:containerElement.height(), top}, 250);
        },250);
    }

    getMessage(data){
        this.props.insertMessage(data);
    }

    handlePrivateMessage(data){
        this.props.addPrivateMessages(data);
        setTimeout(()=>{
            var containerElement = $(".privateListContainer");
            containerElement.parent("div").animate({scrollTop:containerElement.height(), top}, 250);
        },250);
    }

    updateSocketID(data){
        this.props.updateProfileSocket(data);
    }

    updateMessageVote(data){
        this.props.updateMessage(data);
    }

    render(){
        return(
            <div>
                <Snackbar
                    className='messageSnackBar'
                    style={style.snackBar}
                    bodyStyle={style.snackBarBody}
                    contentStyle={style.snackBarContent}
                    open={this.state.openSnackBar && !this.props.toggleUserMenu}
                    message={this.state.SnackBarMessage}
                    action="Show"
                    autoHideDuration={3000}
                    onActionTouchTap={()=>{
                        this.props.toggleUsersMenu(true);
                    }}
                    onRequestClose={()=>{
                        this.setState({
                            openSnackBar: false,
                            SnackBarMessage: ''
                        });
                    }}
                />
                {
                    this.props.children
                }
            </div>
        )
    }
}

const style = {
    snackBarBody:{
        backgroundColor: teal600
    },
    snackBarContent:{
        color: teal50
    },
    snackBar: {
        zIndex: 999
    }
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateProfileSocket,
        setProfileUser,
        setSocketObject,
        setTemporaryUser,
        updateRoomList,
        activeRoom,
        joinRefreshRooms,
        addChatMessages,
        swipePage,
        loadSpinner,
        insertMessage,
        updateMessage,
        addPrivateRoom,
        addPrivateMessages,
        addNotifyPrivateIdCollection,
        toggleUsersMenu
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        privateRoom: state.privateRoom,
        toggleUserMenu: state.toggleUserMenu
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));