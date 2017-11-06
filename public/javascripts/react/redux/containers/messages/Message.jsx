import React, {Component} from 'react';
import Account from 'material-ui/svg-icons/Action/account-circle';
import {ListItem} from 'material-ui/List';
import {teal900, teal800, teal500, teal400, teal100} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Contact from 'material-ui/svg-icons/Communication/chat';
import Star from 'material-ui/svg-icons/toggle/star-border';
import FullStar from 'material-ui/svg-icons/toggle/star';
import HiddenControlsContainer from '../messagesContainer/HiddenControlsContainer';
import MobileRatingMenu from '../messagesContainer/MobileRatingMenu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import { addPrivateRoom, setCurrentTab } from '../../actions/index';
import {find} from 'lodash';
import styled from 'styled-components';


class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false
        };
        this.showMobileRatingMenu = this.showMobileRatingMenu.bind(this);
        this.showDesktopRatingMenu = this.showDesktopRatingMenu.bind(this);
        this.addPrivateChat = this.addPrivateChat.bind(this);
    }


    componentWillMount(){
        if(window.innerWidth <= 575){
            this.setState({
                mobileRating: true
            });
        }
        else{
            this.setState({
                mobileRating: false
            });
        }
    }

    addPrivateChat(){
        var {activeRoom, setCurrentTab} = this.props;
        if(!this.props.private) {
            var {sender} = this.props.message;
            var onlineUser = find(activeRoom.members, (o)=> o.username == sender.username );
            if(onlineUser){
                this.props.addPrivateRoom(sender);
                this.props.socketIO.emit("joinPrivate", {
                    sender: this.props.profileuser._id,
                    receiver: sender._id,
                    users: [this.props.profileuser, sender]
                });
                setTimeout(()=>{
                    setCurrentTab(1);
                },500);
            }
            else{

            }
        }
    }

    showMobileRatingMenu(){
        var {user} = this.props.message.message;
        if (this.props.show && user._id != this.props.profileUserID) return (
            <MobileRatingMenu message={this.props.message}/>
        );
    }

    showDesktopRatingMenu(){
        var {user} = this.props.message.message;
        if(user._id != this.props.profileUserID && this.state.hover){
            return <HiddenControlsContainer message={this.props.message} profileUserID={this.props.profileUserID} />;
        }
    }

    render(){
        var {sender, created, message, rating, ratingUsers} = this.props.message,
            matchUser = find(ratingUsers, (o)=> o._id == this.props.profileuser._id),
            positiveFeedback = (rating >= 5) ? 'positiveFeedback' : '';
        return(
            <StyledList
                style={style.li}
                onMouseEnter={()=>{
                    this.setState({
                        hover: true
                    });
                }}
                onMouseLeave={()=>{
                    this.setState({
                        hover: false
                    });
                }}
            >
                <div
                    style={
                        Object.assign(
                            {backgroundColor: this.state.hover && teal100 || 'transparent'},
                            style.contactOuterBlock
                        )
                    }
                >
                    <div style={style.contactBlock}>
                        <Account style={style.avatar} />
                        {
                            (!this.props.private) && (
                                <IconButton
                                    style={{
                                        visibility: this.state.hover && 'visible' || 'hidden'
                                    }}
                                    iconStyle={style.contactIcon}
                                    onTouchTap={this.addPrivateChat}
                                >
                                    <Contact/>
                                </IconButton>
                            )
                        }
                    </div>
                </div>
                <div style={style.messageContent}>
                    <p style={style.title}>{(sender) && sender.username}</p>
                    <p style={style.content}>
                        {(message) && message.text}
                    </p>
                    <div style={style.bottomWrap}>
                        <p style={style.time}>{moment(created).fromNow()}</p>
                        {
                            (!this.props.private) && (
                                <p style={style.rating}>
                                    {
                                        (!matchUser) &&
                                        <Star
                                            className={positiveFeedback}
                                            style={style.voteStar} /> ||
                                        <FullStar
                                            style={style.voteStar}
                                            className={positiveFeedback}
                                        />

                                    }
                                    <span className={positiveFeedback}>{rating}</span>
                                </p>
                            )
                        }
                    </div>
                </div>
                {
                    (!this.props.private) &&  this.showMobileRatingMenu()
                }
                {
                    (!this.props.private) && this.showDesktopRatingMenu()
                }
            </StyledList>
        );
    }
}

const StyledList = styled.li`
    &:hover{
        background-color: #F6F6F6 !important;
    }
`;

const style = {
    voteStar: {
        color: teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 7,
        marginRight: 3,
        width: 15,
        height: 15
    },
    bottomWrap: {
        display: 'flex'
    },
    avatar: {
        width: 40,
        height: 40,
        fill: teal500
    },
    li:{
        display:'flex',
        padding: '0px 16px',
        position: 'relative'
    },
    listItem:{
        position: 'relative'
    },
    itemListDiv:{
        padding: '0px 16px'
    },
    contactOuterBlock:{
        paddingTop: 5,
        transition: 'transition: background-color 250ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    contactBlock:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    messageContent: {
      padding: '5px 10px'
    },
    title:{
        color: teal900,
        fontWeight: 700,
        fontSize: 14,
        marginTop: 5,
        marginBottom: 7
    },
    content: {
        color: teal800,
        fontSize: '14px',
        marginTop: 0,
        marginBottom: 7,
        lineHeight: '20px',
        fontWeight: 400
    },
    rating: {
        color: teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 0,
        width: 'auto',
        marginLeft: 15,
        display: 'flex'
    },
    time:{
        color: teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 7,
        width: 'auto'
    },
    contactIcon:{
        color: 'white'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addPrivateRoom,
        setCurrentTab
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        activeRoom: state.activeRoom,
        profileuser: state.profileuser,
        privateMessages: state.privateMessages,
        privateRoom: state.privateRoom,
        socketIO: state.socketobject
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(Message);