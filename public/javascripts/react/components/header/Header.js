import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {teal800, teal500, teal100, teal50, teal200} from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Account from 'material-ui/svg-icons/Action/account-circle';
import Settings from 'material-ui/svg-icons/Action/settings';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {closeActiveRoom, setTemporaryUser, showLeftSidebar, enableSoundAction} from '../../redux/actions/index';
import styled from 'styled-components';


class Header extends PureComponent{
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
        this.closeAndLeaveRoom = this.closeAndLeaveRoom.bind(this);
    }

    signOut(){
        this.closeAndLeaveRoom();
        localStorage.removeItem("currentUser");
        //this.props.setTemporaryUser(null);
        this.props.history.push('/home');
        //document.location = "/home";
    }

    closeAndLeaveRoom(){
        if(this.props.activeRoomState && this.props.profileuser){
            this.props.socketIO.emit("leaveRoom", {
                room: this.props.activeRoomState,
                user: this.props.profileuser
            });
            this.props.closeActiveRoom();
        }
    }

    render(){
        return(
            <div className="mainHeader" style={style.outer}>
                <IconButton
                    className="mobileNavIcon"
                    onTouchTap={()=>{
                        this.props.showLeftSidebar(!this.props.leftSidebarVisibility)
                    }}
                >
                    <MenuIcon color="white"/>
                </IconButton>
                <Link to="/home" style={style.link}>
                    <img style={style.logo} src="../../../images/forum_final_1_white.png"/>
                </Link>
                <div className="userBlock" style={style.userBlock}>
                    <List style={style.list}>
                        <UsernameTitle style={style.username}>{this.props.profileuser && this.props.profileuser.username}</UsernameTitle>
                        <ListItem
                            disabled={true}
                            style={style.userList}
                            rightIconButton={
                                <IconMenu
                                    className="headerRightIcons"
                                    style={style.headerRightIcons}
                                    iconButtonElement={
                                        <IconButton
                                            style={{
                                                marginRight:-15,
                                            }}
                                        >
                                            <Account
                                                color="white"
                                            />
                                        </IconButton>
                                    }
                                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                >
                                    <MenuItem
                                        primaryText="Profile"
                                    />
                                    <MenuItem
                                        primaryText="Login"
                                        onTouchTap={()=>{
                                            this.props.history.push('/home');
                                        }}
                                    />
                                    <MenuItem
                                        primaryText="Sign out"
                                        onTouchTap={this.signOut}
                                    />
                                </IconMenu>
                            }
                        >
                        </ListItem>
                        <ListItem
                            disabled={true}
                            style={style.settingsList}
                            rightIconButton={
                                <IconMenu
                                    className="headerRightIcons"
                                    style={style.headerRightIcons}
                                    iconButtonElement={
                                        <IconButton>
                                            <Settings
                                                color="white"
                                            />
                                        </IconButton>
                                    }
                                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                >
                                    <ListItem>
                                        <Toggle
                                            label="Sounds"
                                            labelPosition="left"
                                            defaultToggled={this.props.enableSoundState}
                                            thumbSwitchedStyle={{backgroundColor: teal50}}
                                            trackStyle={{backgroundColor: teal100}}
                                            trackSwitchedStyle={{backgroundColor: teal500}}
                                            onToggle={()=>{
                                                this.props.enableSoundAction(!this.props.enableSoundState)
                                            }}
                                        />
                                    </ListItem>
                                    <MenuItem primaryText="Help" />
                                </IconMenu>
                            }
                        >
                        </ListItem>
                    </List>
                </div>
            </div>
        );
    }
}


const UsernameTitle = styled.p`
    @media (max-width: 767px){
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;                        
    }
`;

var style = {
    username:{
        marginRight: -12,
        cursor: 'default',
        fontSize: 14,
        color: 'white',
        marginTop: 12
    },
    headerRightIcons:{
      top: -7
    },
    outer: {
        height:40,
        overflow:'hidden',
        display:'flex',
        alignItems: 'center',
        backgroundColor: teal500
    },
    userBlock: {
        marginLeft: 'auto',
        marginRight:25
    },
    logo: {
        width: 100,
        marginTop: 5
    },
    link: {
        textDecoration:'none',
        marginLeft: 35,
        color: teal800
    },
    list:{
        display:'flex',
        padding:0,
        alignItems: 'center'
    },
    settingsList:{
        paddingLeft:0
    },
    userList:{
        paddingRight: 40,
        fontSize:14
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        closeActiveRoom,
        setTemporaryUser,
        showLeftSidebar,
        enableSoundAction
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        leftSidebarVisibility: state.leftSidebarVisibility,
        enableSoundState: state.enableSound
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Header));