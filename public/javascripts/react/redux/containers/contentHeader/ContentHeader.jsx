import React, {Component} from 'react';
import {teal800, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui/svg-icons/Navigation/close';
import ArrowBack from 'material-ui/svg-icons/Navigation/arrow-back';
import ArrowForward from 'material-ui/svg-icons/Navigation/arrow-forward';
import StarBorder from 'material-ui/svg-icons/Toggle/star-border';
import Star from 'material-ui/svg-icons/Toggle/star';
import Notifications from 'material-ui/svg-icons/Social/notifications';
import NotificationsNone from 'material-ui/svg-icons/Social/notifications-none';
import Menu from 'material-ui/svg-icons/Navigation/menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleUsersMenu, swipePage, showHeaderSubmenu, closeActiveRoom} from '../../actions/index';

class ContentHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            notification: false,
            star: false
        };
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
        this.toggIconChange = this.toggIconChange.bind(this);
        this.changeIconsState = this.changeIconsState.bind(this);
        this.swipeView = this.swipeView.bind(this);
        this.showActiveRoom = this.showActiveRoom.bind(this);
        this.closeAndLeaveRoom = this.closeAndLeaveRoom.bind(this);
    }

    toggleUserMenu(){
        this.props.toggleUsersMenu(!this.props.showUserMenuValue);
    }

    toggIconChange(icon, bordered, full){
        return (!this.state[icon]) ? bordered : full;
    }

    changeIconsState(icon){
        var stateVal = !this.state[icon];
        this.setState({
            [icon]: stateVal
        });
    }

    swipeView(index){
        this.props.swipePage(index);
    }

    closeAndLeaveRoom(){
        this.props.socketIO.emit("leaveRoom", {
            room: this.props.activeRoomState,
            user: this.props.profileuser
        });
        this.props.closeActiveRoom();
    }

    showActiveRoom(){
        if(this.props.activeRoomState){
            var starState = (this.state.star) ? 'white' : teal50;
            var notificationState = (this.state.notification) ? 'white' : teal50;
            return(
                <div style={style.headerRightPartDiv}>
                    <Avatar className="headerAvatar" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1678/s300/inceptures-software-school-logo.png" style={style.avatar} />
                    <div>
                        <h4 style={style.title}>{this.props.activeRoomState.name}</h4>
                        <p style={style.route}>{this.props.activeRoomState.route}</p>
                    </div>
                    <div className="iconsWrapper" style={style.iconsWrapper}>
                        <IconButton
                            style={Object.assign({},style.iconExtend, style.closeIcon)}
                            iconStyle={style.icons}
                            tooltip="Close active chat"
                            tooltipPosition="top-center"
                            onTouchTap={()=>{
                                this.closeAndLeaveRoom();
                            }}
                        >
                            <Close
                                hoverColor="white"
                            />
                        </IconButton>
                        <IconButton
                            style={style.iconExtend}
                            iconStyle={{
                                color: starState
                            }}
                            tooltip="Add to favourites"
                            tooltipPosition="top-center"
                            onTouchTap={()=>{
                                this.changeIconsState('star')
                            }}
                        >
                            {this.toggIconChange('star', <StarBorder/>, <Star/>)}
                        </IconButton>
                        <IconButton
                            style={style.iconExtend}
                            iconStyle={{
                                color: notificationState
                            }}
                            tooltip="Set notification"
                            tooltipPosition="top-center"
                            onTouchTap={()=>{
                                this.changeIconsState('notification')
                            }}
                        >
                            {this.toggIconChange('notification', <NotificationsNone hoverColor="white" />, <Notifications hoverColor="white" />)}
                        </IconButton>
                        <IconButton
                            style={style.iconExtend}
                            className="lastHeaderIcon"
                            iconStyle={style.icons}
                            tooltip="Show users"
                            tooltipPosition="top-center"
                            onTouchTap={this.toggleUserMenu}
                        >
                            <Menu
                                hoverColor="white"
                            />
                        </IconButton>
                    </div>
                    <div className="mobileHeadIcons" style={style.mobileHeadIcons}>
                        <IconButton
                            style={style.iconExtend}
                            iconStyle={style.icons}
                            onTouchTap={()=>{
                                this.props.showHeaderSubmenu(!this.props.headerSubmenuState);
                            }}
                        >
                            <Menu
                                hoverColor="white"
                            />
                        </IconButton>
                        <IconButton
                            iconStyle={style.icons}
                            style={style.arrowIcon}
                            className="messagesForward"
                            onTouchTap={()=>{
                                this.swipeView(2);
                            }}
                        >
                            <ArrowForward
                                hoverColor="white"
                            />
                        </IconButton>
                    </div>
                </div>
            );
        }
    }

    render(){
        return(
            <div style={style.topHeader}>
                <div style={style.headerContentWrapper}>
                    <IconButton
                        iconStyle={style.icons}
                        onTouchTap={()=>{
                            this.swipeView(0);
                        }}
                        className="messagesBack"
                    >
                        <ArrowBack
                            hoverColor="white"
                        />
                    </IconButton>
                    {this.showActiveRoom()}
                </div>
            </div>
        );
    }
}

var style = {
    route:{
        margin: '3px 0px 0px 20px',
        color: 'rgba(255,255,255,0.85)',
        fontSize: 12,
        cursor: 'default'
    },
    headerRightPartDiv: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center'
    },
    headerContentWrapper: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    mobileHeadIcons:{
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    iconsWrapper:{
        display: 'flex',
        marginLeft: 'auto'
    },
    topHeader: {
        backgroundColor: teal800,
        width:'100%',
        height:60,
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        margin: 0,
        fontWeight: 300,
        color: 'white',
        fontSize: 18,
        marginLeft: 20,
        cursor: 'default'
    },
    avatar: {
        backgroundColor: 'white',
        borderRadius: '40%',
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.3)',
        objectFit:'cover',
        width: 37,
        height: 37
    },
    closeIcon:{
        marginLeft: 'auto'
    },
    icons:{
        color: teal50,
    },
    iconExtend: {
        width:35,
        height:35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        swipePage: swipePage,
        toggleUsersMenu: toggleUsersMenu,
        showHeaderSubmenu: showHeaderSubmenu,
        closeActiveRoom: closeActiveRoom
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        showUserMenuValue: state.toggleUserMenu,
        headerSubmenuState: state.headerSubmenuState,
        activeRoomState: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ContentHeader);