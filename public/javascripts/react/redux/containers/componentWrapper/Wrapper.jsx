import React, {Component} from 'react';
import io from 'socket.io-client';
import randomstring from'randomstring';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateProfileSocket, setProfileUser, setSocketObject, setTemporaryUser, updateRoomList} from '../../actions/index';

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
            this.props.setTemporaryUser({
                socketID: this.socket.id,
                username: `Guest-${ randomstring.generate(5) }`
            });
        });


        this.socket.on('updateRooms', (data)=>{
            this.props.updateRoomList(data);
        });


        if(!window.localStorage.getItem("currentUser")){
            this.props.history.push("/login");
            return;
        }
        else{
            var user = JSON.parse(window.localStorage.getItem("currentUser"));
            axios.get("/user",{
                params: {
                    username: user && user.username
                }
            }).then((response)=>{
                // RETURNED CURRENTLY LOGGED USER
                this.props.setProfileUser(response.data);
            }).catch((err)=>{
                console.info(err);
            })
        }


/*
            const loggedUser = JSON.parse(window.localStorage.getItem('loggeduser'));
            if(loggedUser){
                this.props.setProfileUser(loggedUser);
                this.socket = io('localhost:4000/');
                this.socket.emit('updateID', loggedUser);
                this.socket.on('updateSocketID', this.updateSocketID);
                this.props.setSocketObject(this.socket);
            }
            else this.props.history.push("/register");
*/
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
        updateRoomList: updateRoomList
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profiluser: state.profileuser,
        socketIO: state.socketobject
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Wrapper));