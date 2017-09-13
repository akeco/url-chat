import React, {Component} from 'react';
import io from 'socket.io-client';
import randomstring from'randomstring';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {updateProfileSocket, setProfileUser, setSocketObject, setTemporaryUser,
    updateRoomList, activeRoom, joinRefreshRooms, addChatMessages, swipePage, loadSpinner} from '../../actions/index';

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.updateSocketID = this.updateSocketID.bind(this);
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

        this.socket.on('connect', ()=>{
            var socket = this.socket;
            this.props.setTemporaryUser({
                socketID: this.socket.id,
                username: `Guest-${ randomstring.generate(5) }`
            });

            if(!window.localStorage.getItem("currentUser")){
                this.props.history.push("/login");
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


    updateSocketID(data){
        this.props.updateProfileSocket(data);
    }


    render(){
        return(
            <div>
                {
                    this.props.children
                }
            </div>
        )
    }
}


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
        loadSpinner
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Wrapper));