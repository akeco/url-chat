import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ReactTooltip from 'react-tooltip';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import {teal500, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {primaryTextFunction} from '../../../../../../services/utils';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    activeRoom,
    showLeftSidebar,
    addPrivateRoom
} from '../../actions/index'
import {isEqual} from 'lodash';

class SubListItemURL extends Component{
    constructor(props){
        super(props);
        this.addActiveRoom = this.addActiveRoom.bind(this);
    }

    shouldComponentUpdate(nextProps){
        if(isEqual(this.props.toggleElement, nextProps.toggleElement)) return true;
        return false;
    }

    addActiveRoom(room){
        var {
            changeMessageLoaderState,
            socketIO,
            activeRoomState,
            profileuser,
            addPrivateRoom,
            activeRoom,
        } = this.props;
        if(activeRoomState && activeRoomState._id == room._id) return;

        if(activeRoomState && activeRoomState._id != room._id){
            this.props.socketIO.emit("leaveRoom", {
                room: activeRoomState,
                user: profileuser
            });
            addPrivateRoom(null);
        }

        if(activeRoomState){
            if(activeRoomState._id != room._id){
                this.props.activeRoom(room);
                this.props.socketIO.emit("joinRoom", {
                    room: room,
                    user: this.props.profileuser
                });
            }
        }
        else{
            activeRoom(room);
            socketIO.emit("joinRoom", {
                room: room,
                user: profileuser
            });
        }

        if(changeMessageLoaderState) changeMessageLoaderState(true);
        socketIO.emit('getSpecificMessages', room.roomID);
    }

    render(){
        var {room} = this.props;
        return(
            <List className="subList" style={style.subList}>
                { room.rooms.map((item)=>{
                    return (
                        <div key={item._id} style={{ width: '100%' }}>
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
        )
    }
}

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
        activeRoom,
        showLeftSidebar,
        addPrivateRoom
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        privateRoom: state.privateRoom,
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(SubListItemURL);