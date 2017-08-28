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
import {toggleUsersMenu, swipePage, showHeaderSubmenu} from '../../actions/index';

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


    render(){
        var starState = (this.state.star) ? 'white' : teal50;
        var notificationState = (this.state.notification) ? 'white' : teal50;

        return(
            <div style={style.topHeader}>
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
                <Avatar className="headerAvatar" src="https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png" style={style.avatar} />
                <h4 style={style.title}>{'Twitter.com'}</h4>
               <div className="iconsWrapper" style={style.iconsWrapper}>
                   <IconButton
                       style={Object.assign({},style.iconExtend, style.closeIcon)}
                       iconStyle={style.icons}
                       tooltip="Close active chat"
                       tooltipPosition="top-center"
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
                        onTouchTap={this.goBack}
                        style={style.arrowIcon}
                        className="messagesForward"
                    >
                        <ArrowForward
                            hoverColor="white"
                            onTouchTap={()=>{
                                this.swipeView(2);
                            }}
                        />
                    </IconButton>
                </div>
            </div>
        );
    }
}

var style = {
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
        marginLeft: 20
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
        showHeaderSubmenu: showHeaderSubmenu
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        showUserMenuValue: state.toggleUserMenu,
        headerSubmenuState: state.headerSubmenuState
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ContentHeader);