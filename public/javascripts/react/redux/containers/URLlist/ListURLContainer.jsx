import React, {Component} from 'react';
import {teal800, teal700, teal400, teal50} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Profile from 'material-ui/svg-icons/Action/perm-identity';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getRooms, activeRoom, addChatMessages, swipePage, toggleUsersMenu, addPrivateRoom} from '../../actions/index';
import LinearProgress from 'material-ui/LinearProgress';
import axios from 'axios';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import {primaryTextFunction} from '../../../../../../services/utils';

class ListURLContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            toggleRooms: []
        };
        this.fallBack = "https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00167-Abstract-spiral-globe-logo-design-free-online-logomaker-01.png";
        this.displayActiveRooms = this.displayActiveRooms.bind(this);
        this.addActiveRoom = this.addActiveRoom.bind(this);
        this.refreshUrlList = this.refreshUrlList.bind(this);
        this.toggleSublist = this.toggleSublist.bind(this);
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

    toggleSublist(className){
        var self = this;
        $(this.refs[className]).slideToggle("fast", function () {
            switch ($(this).css("display")){
                case 'block':
                    var newArray = self.state.toggleRooms;
                    newArray.push(className);
                    self.setState({
                       toggleRooms: newArray
                    });
                    break;
                case 'none':
                    self.setState({
                        toggleRooms: self.state.toggleRooms.filter((item)=>{
                            return item != className
                        })
                    });
                    break;
            }
        });
    }

    addActiveRoom(room){
        if(this.props.activeRoomState && this.props.activeRoomState._id != room._id){
            this.props.socketIO.emit("leaveRoom", {
                room: this.props.activeRoomState,
                user: this.props.profileuser
            });
            this.props.toggleUsersMenu(false);
            this.props.addPrivateRoom(null);
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
           // console.info("error",err);
        });
    }


    displayActiveRooms(){
        if(this.props.rooms){
            return this.props.rooms.map((room)=>{
                var theKey = room.name;
                var toggleElement = (this.state.toggleRooms.indexOf(room.name) >=0) ? {display:'block'} : {display:'none'};
                return(
                    <div key={theKey} >
                        <ListItem
                            className="ListItem"
                            style={style.listItem}
                            primaryText={primaryTextFunction(room.name, 23)}
                            innerDivStyle={Object.assign(style.innerDiv)}
                            onTouchTap={()=>{
                                this.toggleSublist(theKey);
                            }}
                            leftAvatar={<Avatar style={style.avatar}
                                                src={(room.image) ? room.image : this.fallBack}
                            />}
                        >
                            <div style={style.innerWrap}>
                                <div style={style.relativeWrap}>
                                    <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                                        <Profile/>
                                    </IconButton>
                                    <div style={style.counter}>{ (room.membersNumber) && room.membersNumber || 0 }</div>
                                </div>
                            </div>
                        </ListItem>
                        <div ref={theKey} style={Object.assign(toggleElement, style.wrapSubList)}>
                            <List className="subList" style={style.subList}>
                                { room.rooms.map((item)=>{
                                    return <div key={item._id}>
                                        <div data-tip={item.route}>
                                            <ListItem
                                                className="urlListItem"
                                                primaryText={primaryTextFunction(item.route, 30)}
                                                innerDivStyle={style.subListItemInner}
                                                style={style.subListItem}
                                                secondaryText={item.members.length}
                                                onTouchTap={()=>{
                                                    this.addActiveRoom(item);
                                                }}
                                            />
                                        </div>
                                        <ReactTooltip place="top" type="dark" effect="solid"/>
                                    </div>
                                }) }
                            </List>
                        </div>
                    </div>
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
    subListItem:{
        fontSize: 14,
        color: teal50,
        fontWeight: 300
    },
    subListItemInner:{
        padding: '10px 15px'
    },
    wrapSubList: {
        marginTop: -3
    },
    subList: {
        backgroundColor: teal700,
        padding: 0,
        boxShadow: 'inset 0 3px 3px 0 rgba(0,0,0,0.3)'
    },
    list: {
        padding:0,
        height: 400,
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    listItem:{
        backgroundColor: teal800,
        border: '1px solid rgba(255,255,255,0.15)',
        color: 'white',
        fontWeight: 300,
        marginBottom: 3,
        position: 'relative',
        fontSize: 14
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
        padding: '15px 16px 15px 65px',
        textShadow: '0 1px 1px rgba(0,0,0,0.2)'
    },
    avatar: {
        borderRadius: '35%',
        objectFit:'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
        border: '1px solid',
        borderColor: teal400,
        backgroundColor: 'white'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getRooms: getRooms,
        activeRoom: activeRoom,
        addChatMessages: addChatMessages,
        swipePage: swipePage,
        toggleUsersMenu: toggleUsersMenu,
        addPrivateRoom
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