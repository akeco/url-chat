import React, {Component} from 'react';
import {List} from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';
import {teal50} from 'material-ui/styles/colors';
import Message from '../../../components/message/Message';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import { Observable, BehaviorSubject } from 'rxjs';
//import triggerWindowState from '../../../components/utils/WindowFocus';
import _ from 'lodash';
//import $ from 'jquery';
import '../../../../../stylesheets/less/messages.less';

class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            windowFocus: true
        };
        this.showMessages = this.showMessages.bind(this);
    }

    componentDidUpdate(){
        var containerElement = $(document.querySelector(".messagesListWrapper > div"));
        $(document.querySelector(".messagesListWrapper")).animate({scrollTop:containerElement.height(), top}, 500);
    }

    showMessages(){
        if(this.props.activeRoom && this.props.chatMessages.length){
            var roomObject = _.find(this.props.chatMessages, (o)=>{
                return o.room._id == this.props.activeRoom._id;
            });
            if(roomObject){
                return roomObject.messages.map((item)=>{
                    return <Message key={ item._id } message={item} show={this.props.pageIndex} profileUserID={this.props.profileuser._id} />;
                });
            }
        }
        else{
            return <LinearProgress style={style.loader} color={teal50} mode="indeterminate" />;
        }
    }


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


var style = {
    loader: {
      marginTop: -23
    },
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
    }
};


function mapStateToProps(state) {
    return ({
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        chatMessages: state.chatmessages,
        pageIndex: state.pageIndex
    });
}

export default connect(mapStateToProps)(Messages);