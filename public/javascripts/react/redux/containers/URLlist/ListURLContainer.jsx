import React, {Component} from 'react';
import {teal800, teal700, teal50} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Profile from 'material-ui/svg-icons/Action/perm-identity';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getRooms, activeRoom, addChatMessages, swipePage } from '../../actions/index';
import LinearProgress from 'material-ui/LinearProgress';
import axios from 'axios';
import randomstring from'randomstring';
import $ from 'jquery';

class ListURLContainer extends Component{
    constructor(props){
        super(props);
        this.displayActiveRooms = this.displayActiveRooms.bind(this);
        this.addActiveRoom = this.addActiveRoom.bind(this);
        this.refreshUrlList = this.refreshUrlList.bind(this);
    }

    componentWillMount(){
        this.props.socketIO.on('refreshUrlList', this.refreshUrlList);
    }

    componentDidMount(){
        axios.get('/api/rooms').then((response)=>{
            this.props.getRooms(response.data);
        }).catch((err)=>{
            console.info(err);
        });
    }

    refreshUrlList(data){
        this.props.getRooms(data);
    }

    addActiveRoom(room){
        if(this.props.activeRoomState && this.props.activeRoomState._id != room._id){
            this.props.socketIO.emit("leaveRoom", {
                room: this.props.activeRoomState,
                user: this.props.profileuser
            });
        }

        if(this.props.activeRoomState){
            if(this.props.activeRoomState._id != room._id){
                this.props.activeRoom(room);
                this.props.socketIO.emit("joinRoom", {
                    room: room,
                    user: this.props.profileuser
                });
            }
        }
        else{
            this.props.activeRoom(room);
            this.props.socketIO.emit("joinRoom", {
                room: room,
                user: this.props.profileuser
            });
        }

        axios.get(`/api/messages/${room.roomID}`).then((response)=>{
            this.props.addChatMessages({
                receiver: (this.props.activeRoomState) && this.props.activeRoomState,
                messages: response.data
            });
            if($(window).innerWidth() <= 575){
                this.props.swipePage(1);
            }
        }).catch((err)=>{
            console.info("error",err);
        });
    }

    displayActiveRooms(){
        if(this.props.rooms){
            return this.props.rooms.map((room)=>{
                return(
                    <ListItem
                        key={randomstring.generate(10)}
                        style={style.listItem}
                        primaryText={room.name}
                        innerDivStyle={Object.assign(style.innerDiv)}
                        onTouchTap={()=>{
                            this.addActiveRoom(room);
                        }}
                        leftAvatar={<Avatar style={style.avatar} src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1678/s300/inceptures-software-school-logo.png" />}
                    >
                        <div style={style.innerWrap}>
                            <div style={style.relativeWrap}>
                                <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                                    <Profile/>
                                </IconButton>
                                <div style={style.counter}>{ (room.members) && room.members.length || 0 }</div>
                            </div>
                        </div>
                    </ListItem>
                );
            });
        }
        else{
            return <LinearProgress color={teal50} mode="indeterminate" />
        }
    }

    render() {
        return (
            <List style={style.list}>
                {this.displayActiveRooms()}
            </List>
        );
    }
}

var style = {
    list: {
        padding:0,
        height: 315,
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    listItem:{
        backgroundColor: teal800,
        border: '1px solid rgba(255,255,255,0.15)',
        color: 'white',
        fontWeight: 300,
        marginBottom: 5,
        position: 'relative'
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: teal700,
        height: '100%',
        right: 0,
        top: 0
    },
    relativeWrap:{
        display:'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        width:'100%'
    },
    memberNumb: {
        height: '100%',
        top: -7
    },
    counter: {
        fontSize: 10,
        color: teal50,
        fontWeight: 500,
        alignSelf: 'center',
        marginTop: -19
    },
    profileIcon:{
        color: teal50
    },
    innerDiv:{
        padding: '15px 16px 15px 72px',
        textShadow: '0 1px 1px rgba(0,0,0,0.2)'
    },
    avatar: {
        borderRadius: '40%',
        objectFit:'cover',
        width: 30,
        height: 30,
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.3)',
        backgroundColor: 'white'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getRooms: getRooms,
        activeRoom: activeRoom,
        addChatMessages: addChatMessages,
        swipePage: swipePage
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        rooms: state.rooms,
        socketIO: state.socketobject,
        chatMessages: state.chatmessages,
        activeRoomState: state.activeRoom,
        pageIndex: state.pageIndex,
        profileuser: state.profileuser
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ListURLContainer);