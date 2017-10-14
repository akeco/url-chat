import React, {Component} from 'react';
import {List} from 'material-ui/List';
import {teal300} from 'material-ui/styles/colors';
import Message from './Message';
import CircularProgress from 'material-ui/CircularProgress';
import InfoContainer from '../../../components/homepage/InfoContainer';
import {connect} from 'react-redux';
import { find } from 'lodash';
import styled from 'styled-components';
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
        var {tab} = this.props;
        if(this.props.activeRoom && this.props.chatMessages.length && tab == 0){
            var roomObject = find(this.props.chatMessages, (o)=>{
                return o.room._id == this.props.activeRoom._id;
            });
            if(roomObject){
                return roomObject.messages.map((item)=>{
                    return <Message key={ item._id } message={item} show={true} profileUserID={this.props.profileuser._id} />;
                });
            }
        }
        else if(this.props.activeRoom && this.props.privateRoom && tab == 1){
            var activeRoom = find(this.props.privateMessages, (o)=>{ return o.privateRoomID == this.props.privateRoom.privateRoomID });
            if(activeRoom){
                if(activeRoom.messages.length){
                    return activeRoom.messages.map((item)=>{
                        return <Message key={ item._id } private={true} message={item} profileUserID={this.props.profileuser._id} />
                    });
                }
            }
        }
        else{
            return <InfoContainer />;
        }
    }


    render(){
        var {tab, showMessageLoader} = this.props;
        var homepageClass = (!this.props.activeRoom || (tab == 1 && !this.props.privateRoom)) ? 'showHomepageInfo messagesListWrapper' : 'messagesListWrapper';
        return(
            <div style={style.outerDivBlock}>
                {
                    (showMessageLoader) && <CircularProgress color={teal300} style={ style.loader } size={60} thickness={7} />
                }
                <MessagesListWrapper className={homepageClass} style={style.messagesListWrapper} >
                    <CustomList className={homepageClass}>
                        {this.showMessages()}
                    </CustomList>
                </MessagesListWrapper>
            </div>
        );
    }
}

const MessagesListWrapper = styled.div`
    &.showHomepageInfo{
        background-image: url('../../../../../images/homepage-illustration.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: bottom;
        @media (min-width: 1000px){
            background-size: cover;
        }
    }
`;

const CustomList = styled(List)`
    &.showHomepageInfo{
        margin-top: -15px;
        height: 100%;
        padding-top: 25px !important;
        padding-bottom: 150px;
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); 
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); 
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
    }
`;

var style = {
    loader: {
      marginTop: -23
    },
    outerDivBlock:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
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
    },
    loader: {
        alignSelf: 'center',
        position: 'absolute',
        top: '45%'
    }
};


function mapStateToProps(state) {
    return ({
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        chatMessages: state.chatmessages,
        pageIndex: state.pageIndex,
        privateMessages: state.privateMessages,
        privateRoom: state.privateRoom
    });
}

export default connect(mapStateToProps)(Messages);