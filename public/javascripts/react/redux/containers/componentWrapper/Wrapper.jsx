import React, {Component} from 'react';
import io from 'socket.io-client';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateProfileSocket, setProfileUser, setSocketObject} from '../../actions/index';

class Wrapper extends Component{
    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateSocketID = this.updateSocketID.bind(this);
        this.socket = '';
    }

    componentWillMount(){
        /*
        const loggedUser = JSON.parse(window.localStorage.getItem('loggeduser'));
        if(loggedUser){
            this.props.setProfileUser(loggedUser);
            this.socket = io('localhost:4000/');
            //this.socket = io('192.168.43.31:4000/');
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
        setSocketObject: setSocketObject
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(Wrapper));