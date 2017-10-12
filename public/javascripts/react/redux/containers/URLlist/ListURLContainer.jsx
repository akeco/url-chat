import React, {Component} from 'react';
import {tealA400, teal500, teal200, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Profile from 'material-ui/svg-icons/Action/perm-identity';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getRooms, activeRoom, addChatMessages, toggleUsersMenu, addPrivateRoom, showLeftSidebar} from '../../actions/index';
import axios from 'axios';
import $ from 'jquery';
import ReactTooltip from 'react-tooltip';
import PrivateUserListItem from '../usersPart/PrivateUserListItem'
import PrivateUserBadgeListItem from '../usersPart/PrivateUserBadgeListItem'
import {primaryTextFunction} from '../../../../../../services/utils';
import PropTypes from 'prop-types';
import {find} from 'lodash';

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
        this.showMembers = this.showMembers.bind(this);
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

    showMembers(){
        if(this.props.activeRoomState && this.props.tab){
            var activeRoom = find(this.props.rooms, (o)=>{ return o.name == this.props.activeRoomState.name; });
            if(activeRoom) {
                activeRoom = find(activeRoom.rooms, (o)=>{ return o.route == this.props.activeRoomState.route });
                if(activeRoom){
                    return activeRoom.members.filter((item)=>{
                        if(this.props.filterVal){
                            return (item.username.toLowerCase().indexOf(this.props.filterVal.toLowerCase()) != -1)
                        }
                        else return true;
                    }).map((item)=>{
                        if(item._id != this.props.profileuser._id){
                            var checkNotifications = [];
                            if(this.props.privateNotifyCollection.length){
                                checkNotifications = this.props.privateNotifyCollection.filter((userID)=>{ return userID == item._id });
                            }
                            if(checkNotifications.length){
                                return(
                                    <PrivateUserBadgeListItem key={item._id} item={item} checkNotifications={checkNotifications} />
                                );
                            }
                            else{
                                return(
                                    <PrivateUserListItem key={item._id} item={item} />
                                );
                            }
                        }
                    });
                }
            }
        }
    }

    displayActiveRooms(){
        if(this.props.rooms && !this.props.tab){
            return this.props.rooms.map((room)=>{
                var theKey = room.name;
                var toggleElement = (this.state.toggleRooms.indexOf(room.name) >=0) ? {display:'block'} : {display:'none'};
                return(
                    <div key={theKey} >
                        <ListItem
                            hoverColor={'rgba(0,0,0,0.025)'}
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
                                                    setTimeout(()=>{
                                                        this.props.showLeftSidebar(false);
                                                    },1000);
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
    }

    render() {
        var title = (this.props.tab) ? 'Room Members' : 'Available Rooms';
        return (
            <div>
                <p style={style.title}>{title}</p>
                {
                    (this.props.tab == 0) && (
                        <List style={style.list}>
                            {
                                this.displayActiveRooms()
                            }
                        </List>
                    )
                }
                {
                    (this.props.tab == 1 && this.props.activeRoomState) && (
                        <List style={style.list}>
                            {
                                this.showMembers()
                            }
                        </List>
                    )
                }
                {
                    /*
                    (this.props.tab == 1 && this.props.activeRoomState && !this.props.activeRoomState.members.length) && (
                        <p>Empty members list</p>
                    )
                    */
                }
            </div>
        );
    }
}

ListURLContainer.propTypes = {
    tab: PropTypes.number.isRequired
};

var style = {
    title: {
        color: teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5
    },
    subListItem:{
        fontSize: 13,
        color: 'rgba(255,255,255,0.95)',
        fontWeight: 300
    },
    subListItemInner:{
        padding: '10px 15px'
    },
    subList: {
        backgroundColor: teal500,
        //backgroundColor: tealA400,
        padding: 0,
    },
    list: {
        padding:0,
        maxHeight: 400,
        overflowY: 'scroll',
        overflowX: 'hidden',
        backgroundColor: 'white'
    },
    listItem:{
        borderBottom: `1px solid ${tealA100}`,
        color: teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: teal300,
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
    },
    avatar: {
        borderRadius: '100%',
        objectFit:'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        backgroundColor: 'white'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getRooms,
        activeRoom,
        addChatMessages,
        showLeftSidebar,
        toggleUsersMenu,
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
        profileuser: state.profileuser,
        privateRoom: state.privateRoom,
        privateNotifyCollection: state.privateNotifyCollection
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ListURLContainer);