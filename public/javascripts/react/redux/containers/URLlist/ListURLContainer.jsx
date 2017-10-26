import React, {Component} from 'react';
import {teal500, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import Profile from 'material-ui/svg-icons/action/perm-identity';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
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
import { Scrollbars } from 'react-custom-scrollbars';
import {find} from 'lodash';
import styled from 'styled-components';

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
        var {changeMessageLoaderState} = this.props;
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

        if(changeMessageLoaderState) changeMessageLoaderState(true);
        axios.get(`/api/messages/${room.roomID}`).then((response)=>{
            if(changeMessageLoaderState) changeMessageLoaderState(false);
            this.props.addChatMessages({
                receiver: (this.props.activeRoomState) && this.props.activeRoomState,
                messages: response.data
            });
            setTimeout(()=>{
                var containerElement = $(".messagesListWrapper > div:first-child > div");
                $(".messagesListWrapper > div:first-child").animate({scrollTop:containerElement.height(), top}, 500);
            },250);
        }).catch((err)=>{
            if(changeMessageLoaderState) changeMessageLoaderState(false);
           // console.info("error",err);
        });
    }

    showMembers(){
        var {activeRoomState, tab, rooms} = this.props;
        if(activeRoomState && tab){
            var activeRoom = find(rooms, (o)=>{ return o.name == activeRoomState.name; });
            if(activeRoom) {
                activeRoom = find(activeRoom.rooms, (o)=>{ return o.route == activeRoomState.route });
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
                                    return (
                                        <div key={item._id}>
                                            <CustomIconMenu
                                                iconStyle={{color: 'white'}}
                                                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                            >
                                                <MenuItem
                                                    primaryText="Open URL in new tab"
                                                    onTouchTap={()=>{
                                                        var httpVar = item.route.indexOf("http");
                                                        var url = (httpVar == -1) ? `http://${item.route}` : item.route;
                                                        var win = window.open(url, '_blank');
                                                        win.focus();
                                                    }}
                                                />
                                            </CustomIconMenu>
                                            <CustomDiv data-tip={item.route}>
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
                                            </CustomDiv>
                                            <ReactTooltip place="top" type="dark" effect="solid"/>
                                        </div>
                                    )
                                }) }
                            </List>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        var {tab, activeRoomState} = this.props;
        var title = (this.props.tab) ? 'Room Members' : 'Available Rooms';
        return (
            <div>
                <p style={style.title}>{title}</p>
                {
                    (this.props.tab == 0) && (
                            <CustomScroller
                                style={{width: '100%', height:400}}
                                autoHide
                                autoHideTimeout={1000}
                                autoHideDuration={200}
                            >
                                <List style={style.list}>
                                {
                                    this.displayActiveRooms()
                                }
                                </List>
                            </CustomScroller>
                    )
                }
                {
                    (this.props.tab == 1 && this.props.activeRoomState) && (
                        <CustomScroller
                            style={{width: '100%', height:400}}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                        >
                            <List style={style.list}>
                                {
                                    this.showMembers()
                                }
                            </List>
                        </CustomScroller>
                    )
                }
                {
                    (tab == 1 && !activeRoomState) && (
                        <div style={{ display:'flex' }}>
                            <InfoIcon style={ style.infoIcon } />
                            <div>
                                <p style={style.emptyMessage}>Empty members list</p>
                                <p style={Object.assign({},style.emptyMessage,{marginTop: 5})}>Please insert or select available URL room</p>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

ListURLContainer.propTypes = {
    tab: PropTypes.number.isRequired
};


const CustomScroller = styled(Scrollbars)`
    & > div:last-child{
        z-index: 999;
    }
`;


const CustomIconMenu = styled(IconMenu)`
    width: 40px;
    height: 40px;
    button{
        width: 40px !important;
        height: 40px !important;
        padding: 0px !important;
    }
`;

const CustomDiv = styled.div`
    flex-grow: 1;
    & > div{
            height: 100%;
            span{
                height: 100%;
                padding-top: 2px !important;
            }
        }
`;


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
        color: 'white',
        fontWeight: 300
    },
    subListItemInner:{
        padding: '10px 15px'
    },
    subList: {
        backgroundColor: teal500,
        padding: 0,
    },
    list: {
        padding:0,
       // height: 800,
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
    },
    emptyMessage: {
        color: teal300,
        fontSize: 13,
        paddingLeft: 10,
        fontWeight: 300,
        marginBottom: 5
    },
    infoIcon: {
        position: 'relative',
        top: 13,
        marginLeft: 10,
        color: teal300
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