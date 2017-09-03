import React, {Component} from 'react';
import io from 'socket.io-client';
import randomstring from'randomstring';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateProfileSocket, setProfileUser, setSocketObject, setTemporaryUser, updateRoomList, activeRoom, joinRefreshRooms} from '../../actions/index';

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateSocketID = this.updateSocketID.bind(this);
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
                })
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
            this.props.updateRoomList(data);
            //this.props.activeRoom(data);
        });


        this.socket.on('refreshRoomsOnJoin', (data)=>{
            this.props.joinRefreshRooms(data);
        });

    }


    updateSocketID(data){
        this.props.updateProfileSocket(data);
    }

    sendMessage(event){
        event.preventDefault();
        var messages = this.state.messages;
        messages.push(this.refs.message.value);
        this.setState({
            messages: messages
        });
        this.socket.emit("message", {
            id: this.refs.id.value,
            text: this.refs.message.value
        });
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


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateProfileSocket: updateProfileSocket,
        setProfileUser: setProfileUser,
        setSocketObject: setSocketObject,
        setTemporaryUser: setTemporaryUser,
        updateRoomList: updateRoomList,
        activeRoom: activeRoom,
        joinRefreshRooms: joinRefreshRooms
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profiluser: state.profileuser,
        socketIO: state.socketobject
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Wrapper));