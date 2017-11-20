import React, {Component} from 'react';
import io from 'socket.io-client';
import {teal600, teal50} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import randomstring from'randomstring';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import buzz from 'buzz';
import {bindActionCreators} from 'redux';
import {
    updateProfileSocket,
    setProfileUser,
    setSocketObject,
    setTemporaryUser,
    updateRoomList,
    activeRoom,
    joinRefreshRooms,
    addChatMessages,
    loadSpinner,
    insertMessage,
    updateMessage,
    addPrivateRoom,
    addPrivateMessages,
    addNotifyPrivateIdCollection,
    setCurrentTab,
    showLeftSidebar,
    getRooms,
    prependMessages,
    showPrependLoader,
    updateActiveRoom
} from '../../actions/index';

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            openSnackBar: false,
            SnackBarMessage: '',
        };

        this.playSound = new buzz.sound([
            '../../../../../sound/ping.mp3',
            '../../../../../sound/ping.ogg',
            '../../../../../sound/ping.wav'
        ], {
            preload: true,
        });

        this.isSafari = (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) ? true : false;

        this.updateSocketID = this.updateSocketID.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.updateMessageVote = this.updateMessageVote.bind(this);
        this.addPrivateRoom = this.addPrivateRoom.bind(this);
        this.handlePrivateMessage = this.handlePrivateMessage.bind(this);
        this.notifyMessage = this.notifyMessage.bind(this);
        this.setSnackbarVal = this.setSnackbarVal.bind(this);
    }


    componentDidMount(){
        window.addEventListener('beforeunload', ()=>{
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
        this.socket.emit("getRooms");
        this.socket.on("getMessage", this.getMessage);
        this.socket.on("updateMessageVote", this.updateMessageVote);
        this.socket.on("joinPrivateRoom", this.addPrivateRoom);
        this.socket.on("handlePrivateMessage", this.handlePrivateMessage);
        this.socket.on("notifyMessage", this.notifyMessage);

        this.socket.on('receiveRooms', (data)=>{
            this.props.getRooms(data);
        });

        this.socket.on('refreshUrlList', (data)=>{
            var {getRooms, updateActiveRoom, activeRoomState} = this.props;
            getRooms(data);
            if(activeRoomState){
                updateActiveRoom(data);
            }
        });

        this.socket.on('connect', ()=>{
            var socket = this.socket;
            this.props.setTemporaryUser({
                socketID: this.socket.id,
                username: `Guest-${ randomstring.generate(5) }`
            });

            if(!window.localStorage.getItem("currentUser")){
                axios.post("/api/user/save", {
                    data:{
                        user: this.props.temporaryUser
                    }
                }).then((response)=>{
                    this.props.setProfileUser(response.data);
                    window.localStorage.setItem("currentUser", JSON.stringify(response.data));
                    this.props.history.push("/");
                }).catch((err)=>{
                    console.info(err);
                });

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
            var {joinRefreshRooms, profileuser, activeRoom, updateActiveRoom} = this.props;
            joinRefreshRooms(data.result);
            if(data.notifyID == profileuser._id) activeRoom(data.result);
            else updateActiveRoom(data.result);
        });

        this.socket.on("prependMessagesResponse", (data)=>{
            if(data) {
                this.props.prependMessages(data);
                this.props.showPrependLoader(false);
            }
        });

        this.socket.on('receiveSpecificRoomMessages', (data)=>{
            var {showLeftSidebar, leftSidebarVisibility} = this.props;
            if(data.length){
                var {name} = data[0].receiver;
                this.props.addChatMessages({
                    receiver: (this.props.activeRoomState) && this.props.activeRoomState,
                    messages: data
                });
                this.setState({
                    openSnackBar: true,
                    SnackBarMessage: `You joined ${name} chat room`
                });
                setTimeout(()=>{
                    var containerElement = $(".messagesListWrapper > div:first-child > div");
                    $(".messagesListWrapper > div:first-child").animate({scrollTop:containerElement.height(), top}, 500);
                },250);
            }
            else {
                var {activeRoomState} = this.props;
                this.props.addChatMessages(null);
                this.setState({
                    openSnackBar: true,
                    SnackBarMessage: `You joined ${activeRoomState.name} chat room`
                });
            }
            if(leftSidebarVisibility) showLeftSidebar(false);
        });

        this.socket.on('addActiveRoom', (data)=>{
            if(data){
                (async ()=>{
                    await this.props.activeRoom(data);
                    this.socket.emit("getSpecificRoomMessages", data.roomID);
                })();
            }
            else{
                this.setState({
                    openSnackBar: true,
                    SnackBarMessage: 'Invalid URL'
                });
                this.props.loadSpinner(false);
            }
        });
    }

    notifyMessage(data){
        var {_id} = data,
            findActivatedChat = null;
        if(this.props.privateRoom){
            findActivatedChat = this.props.privateRoom.usersID.indexOf(data._id);
        }

        if(!this.props.currentTab || (this.props.currentTab == 1 && !this.props.privateRoom) || (this.props.currentTab == 1 && this.props.privateRoom && this.props.privateRoom.usersID.indexOf(_id) == -1)){
            this.setState({
                openSnackBar: true,
                SnackBarMessage: `Received private message from ${data.username}`
            });
        }

        if(this.props.privateRoom && findActivatedChat == -1){
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
            var containerElement = $(".messagesListWrapper > div:first-child > div");
            $(".messagesListWrapper > div:first-child").animate({scrollTop:containerElement.height(), top}, 500);
        },250);
    }

    getMessage(data){
        var {profileuser, enableSound} = this.props;
        this.props.insertMessage(data);
        if(data.sender.username != profileuser.username && enableSound && !this.isSafari) {

            this.playSound.play();
        }
        var elementHeight = $(".messagesListWrapper > div:first-child > div").height(),
        topPosition = parseInt($(".messagesListWrapper > div:first-child").scrollTop()) + window.innerHeight - 160;
        if((elementHeight - topPosition) < 100){
            setTimeout(()=>{
                var containerElement = $(".messagesListWrapper > div:first-child > div").height();
                $(".messagesListWrapper > div:first-child").animate({scrollTop:containerElement, top}, 500);
            }, 250);
        }
        else{
            if(data.sender.username != profileuser.username){
                this.setState({
                    openSnackBar: true,
                    SnackBarMessage: `Received new public message`
                });
            }
        }
    }

    handlePrivateMessage(data){
        var {profileuser, enableSound} = this.props;
        this.props.addPrivateMessages(data);
        if(data.sender.username != profileuser.username && enableSound && !this.isSafari){
            this.playSound.play();
        }
        setTimeout(()=>{
           var containerElement = $(".messagesListWrapper > div:first-child > div").height();
           $(".messagesListWrapper > div:first-child").animate({scrollTop:containerElement, top}, 500);
        },250);
    }

    updateSocketID(data){
        this.props.updateProfileSocket(data);
    }

    updateMessageVote(data){
        this.props.updateMessage(data);
    }

    setSnackbarVal(message){
        this.setState({
            openSnackBar: true,
            SnackBarMessage: message,
        });
    }

    render(){
        var {setCurrentTab, showLeftSidebar} = this.props;

        return(
            <div>
                <Snackbar
                    onClick={()=> {
                        setCurrentTab(1);
                        showLeftSidebar(true);
                    }}
                    className='messageSnackBar'
                    style={style.snackBar}
                    bodyStyle={style.snackBarBody}
                    contentStyle={style.snackBarContent}
                    open={this.state.openSnackBar}
                    message={this.state.SnackBarMessage}
                    autoHideDuration={3000}
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
        backgroundColor: teal600,
        opacity: '0.8'
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
        loadSpinner,
        insertMessage,
        updateMessage,
        addPrivateRoom,
        addPrivateMessages,
        addNotifyPrivateIdCollection,
        setCurrentTab,
        showLeftSidebar,
        getRooms,
        prependMessages,
        showPrependLoader,
        updateActiveRoom
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        privateRoom: state.privateRoom,
        toggleUserMenu: state.toggleUserMenu,
        currentTab: state.currentTab,
        temporaryUser: state.temporaryUser,
        enableSound: state.enableSound,
        leftSidebarVisibility: state.leftSidebarVisibility
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));