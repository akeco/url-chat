import React, {Component} from 'react';
import {teal800, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Close from 'material-ui/svg-icons/Navigation/close';
import StarBorder from 'material-ui/svg-icons/Toggle/star-border';
import Star from 'material-ui/svg-icons/Toggle/star';
import Notifications from 'material-ui/svg-icons/Social/notifications';
import NotificationsNone from 'material-ui/svg-icons/Social/notifications-none';
import Menu from 'material-ui/svg-icons/Navigation/menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleUsersMenu} from '../../actions/index';

class ContentHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            notification: false
        };
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
        this.toggIconChange = this.toggIconChange.bind(this);
        this.changeIconsState = this.changeIconsState.bind(this);
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

    render(){
        return(
            <div style={style.topHeader}>
                <Avatar src="https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png" style={style.avatar} />
                <h4 style={style.title}>{'Twitter.com'}</h4>
                <IconButton
                    style={style.closeIcon}
                    iconStyle={style.icons}
                    tooltip="Close active chat"
                    tooltipPosition="top-center"
                >
                    <Close/>
                </IconButton>
                <IconButton
                    iconStyle={style.icons}
                    tooltip="Add to favourites"
                    tooltipPosition="top-center"
                    onTouchTap={()=>{
                        this.changeIconsState('star')
                        }
                    }
                >
                    {this.toggIconChange('star', <StarBorder/>, <Star/>)}
                </IconButton>
                <IconButton
                    iconStyle={style.icons}
                    tooltip="Set notification"
                    tooltipPosition="top-center"
                    onTouchTap={()=>{
                        this.changeIconsState('notification')
                        }
                    }
                >
                    {this.toggIconChange('notification', <NotificationsNone/>, <Notifications/>)}
                </IconButton>
                <IconButton
                    iconStyle={style.icons}
                    style={{marginRight:29}}
                    tooltip="Show users"
                    tooltipPosition="top-center"
                    onTouchTap={this.toggleUserMenu}
                >
                    <Menu/>
                </IconButton>
            </div>
        );
    }
}

var style = {
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
        marginLeft: 20,
        width: 37,
        height: 37
    },
    closeIcon:{
        marginLeft: 'auto'
    },
    icons:{
        color: teal50
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleUsersMenu: toggleUsersMenu,
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        showUserMenuValue: state.toggleUserMenu
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ContentHeader);