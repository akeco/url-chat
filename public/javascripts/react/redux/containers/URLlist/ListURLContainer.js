import React, {Component} from 'react';
import {teal500, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {List} from 'material-ui/List';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    getRooms,
    activeRoom,
    addChatMessages,
    addPrivateRoom,
    showLeftSidebar,
    loadSpinner
} from '../../actions/index';
import PrivateUserListItem from '../usersPart/PrivateUserListItem'
import PrivateUserBadgeListItem from '../usersPart/PrivateUserBadgeListItem'
import ListItemURL from './ListItemURL';
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
        this.displayActiveRooms = this.displayActiveRooms.bind(this);
        this.showMembers = this.showMembers.bind(this);
        this.changeToggleRoomsState = this.changeToggleRoomsState.bind(this);
    }

    componentDidMount(){
        var {changeMessageLoaderState, socketIO} = this.props;
        socketIO.on("receiveSpecificPublicRoomMessages", (data)=>{
            if(data){
                this.props.loadSpinner(false);
                this.props.addChatMessages({
                    receiver: (this.props.activeRoomState) && this.props.activeRoomState,
                    messages: data.result,
                    messagesNumber: data.messagesNumber || null
                });

                setTimeout(()=>{
                    var containerElement = $(".messagesListWrapper > div:first-child > div");
                    $(".messagesListWrapper > div:first-child").animate({scrollTop:containerElement.height(), top}, 500);
                },250);
            }
            else if(changeMessageLoaderState) changeMessageLoaderState(false);
        });
    }

    changeToggleRoomsState(value){
        this.setState({
            toggleRooms: value
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
        var {changeMessageLoaderState} = this.props;
        if(this.props.rooms && !this.props.tab){
            return this.props.rooms.map((room)=>{
                var theKey = room.name;
                var toggleElement = (this.state.toggleRooms.indexOf(room.name) >=0) ? {display:'block'} : {display:'none'};
                return(
                    <ListItemURL
                        key={theKey}
                        theKey={theKey}
                        room={room}
                        toggleElement={toggleElement}
                        toggleRooms={this.state.toggleRooms}
                        changeToggleRoomsState={this.changeToggleRoomsState}
                        changeMessageLoaderState={changeMessageLoaderState}
                    />
                );
            });
        }
    }

    render() {
        var {tab, activeRoomState, rooms} = this.props;
        var title = (this.props.tab) ? 'Room Members' : 'Available Rooms';
        return (
            <div style={style.mainWrapper}>
                <p style={style.title}>{title}</p>
                {
                    (!this.props.filterVal && this.props.tab == 1 && activeRoomState && activeRoomState.members.length > 7) && (
                        <div className="emptyGradient" style={style.emptyGradientScrollBlock}></div>
                    )
                }
                {
                    (this.props.tab == 0 && rooms && rooms.length > 7) && (
                        <div className="emptyGradient" style={style.emptyGradientScrollBlock}></div>
                    )
                }
                {
                    (this.props.tab == 0) && (
                            <CustomScroller
                                style={{width: '100%', height:350}}
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
                    (this.props.tab == 1 && activeRoomState && activeRoomState.members.length > 1) && (
                        <CustomScroller
                            style={style.customScroller}
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
                    (tab == 1 && (!activeRoomState || activeRoomState.members.length < 2)) && (
                        <div style={{ display:'flex' }}>
                            <InfoIcon style={ style.infoIcon } />
                            <div>
                                <p style={Object.assign({}, style.emptyMessage, {marginTop: 10})}>Empty members list</p>
                                <p style={style.emptyMessage}>Please insert or select available URL room</p>
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
    border-right: 1px solid rgb(224, 242, 241);
    @media screen and (-webkit-min-device-pixel-ratio:0), @media screen and(-webkit-min-device-pixel-ratio:0){
        & > div:first-child{
            margin-bottom: -16px !important;
        }       
    }
    & > div:last-child{
        z-index: 999;
    }
`;


var style = {
    mainWrapper: {
        position: 'relative',
        overflow: 'hidden'
    },
    emptyGradientScrollBlock: {
        width: '100%',
        height: 25,
        position: 'absolute',
        bottom: -18,
        borderRadius: '100%',
        zIndex: 999,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)',
        pointerEvents: 'all'
    },
    customScroller: {
        width: '100%',
        height:329
    },
    title: {
        color: teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 12
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
        backgroundColor: 'white'
    },
    listItem:{
        borderBottom: `1px solid ${tealA100}`,
        color: teal500,
        fontWeight: 400,
        position: 'relative',
        fontSize: 14,
        textTransform: 'uppercase',
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
        marginBottom: 0,
        cursor: 'default'
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
        addPrivateRoom,
        loadSpinner
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        rooms: state.rooms,
        socketIO: state.socketobject,
        chatMessages: state.chatmessages,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom,
        privateNotifyCollection: state.privateNotifyCollection
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ListURLContainer);