import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Profile from 'material-ui/svg-icons/action/perm-identity';
import Avatar from 'material-ui/Avatar';
import {ListItem} from 'material-ui/List';
import {teal500, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {primaryTextFunction} from '../../../../../../services/utils';
import SubListItemURL from './SubListItemURL';
import { isEqual } from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    activeRoom,
    showLeftSidebar,
    addPrivateRoom,
    loadSpinner
} from '../../actions/index'

class ListItemURL extends Component{
    constructor(props){
        super(props);
        this.fallBack = "/images/list-icon.png";
        this.toggleSublist = this.toggleSublist.bind(this);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.toggleElement.display != nextProps.display) return true;
        if(this.props.toggleElement.room.membersNumber != nextProps.room.membersNumber) return true;
        if(!isEqual(this.props.toggleRooms, nextProps.toggleRooms)) return true;
        return false;
    }

    toggleSublist(className){
        var self = this,
            {toggleRooms, changeToggleRoomsState} = this.props;
        $(this.refs[className]).slideToggle("fast", function () {
            switch ($(this).css("display")){
                case 'block':
                    var newArray = toggleRooms;
                    newArray.push(className);
                    changeToggleRoomsState(newArray);
                    break;
                case 'none':
                    changeToggleRoomsState(
                        toggleRooms.filter((item)=>{
                            return item != className
                        })
                    );
                    break;
            }
        });
    }

    render(){
        var {theKey, room, toggleElement} = this.props;
        return(
            <div>
                <ListItem
                    hoverColor={'rgba(0,0,0,0.025)'}
                    className="ListItem"
                    style={style.listItem}
                    primaryText={
                        <span style={style.title}>
                            {room.name}
                        </span>
                    }
                    innerDivStyle={Object.assign(style.innerDiv)}
                    onTouchTap={()=>{
                        this.toggleSublist(theKey);
                    }}
                    leftAvatar={<Avatar style={style.avatar} src={(room.image) ? room.image : this.fallBack} />}
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
                    <SubListItemURL {...this.props} />
                </div>
            </div>
        )
    }
}


var style = {
    title: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: 175,
        display: 'inline-block'
    },
    subListItem:{
        fontSize: 13,
        color: 'white',
        fontWeight: 300,
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
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.05)'
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
        addPrivateRoom,
        loadSpinner
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

export default connect(mapStateToProps, matchDispatchToProps)(ListItemURL);