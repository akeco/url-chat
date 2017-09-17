import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {teal800} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Account from 'material-ui/svg-icons/Action/account-circle';
import Settings from 'material-ui/svg-icons/Action/settings';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {closeActiveRoom} from '../../redux/actions/index';

const muiTheme = getMuiTheme({
    palette: {
        textColor: teal800,
    }
});

class Header extends Component{
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
        this.closeAndLeaveRoom = this.closeAndLeaveRoom.bind(this);
    }

    signOut(){
        this.closeAndLeaveRoom();
        localStorage.removeItem("currentUser");
        this.props.history.push('/home');
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
                <Link to="/" style={style.link}>
                    <h4 style={style.logo}>
                        Website<span style={{fontWeight:400}}>Logo</span>
                    </h4>
                </Link>
                <div className="userBlock" style={style.userBlock}>
                    <MuiThemeProvider muiTheme={muiTheme}>
                      <List style={style.list}>
                          <p style={style.username}>{this.props.profileuser && this.props.profileuser.username}</p>
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
                                                  marginRight:-15
                                              }}
                                          >
                                              <Account/>
                                          </IconButton>
                                      }
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                  >
                                      <MenuItem primaryText="Profile" />
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
                                             <Settings/>
                                           </IconButton>
                                      }
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                  >
                                      <MenuItem primaryText="Refresh" />
                                      <MenuItem primaryText="Send feedback" />
                                      <MenuItem primaryText="Help" />
                                  </IconMenu>
                              }
                          >
                          </ListItem>
                      </List>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

var style = {
    username:{
        marginRight: -10,
        cursor: 'default',
        fontSize: 14
    },
    headerRightIcons:{
      top: -7
    },
    outer: {
        height:40,
        overflow:'hidden',
        display:'flex',
        borderBottom:'1px solid #E7E4E4',
        alignItems: 'center'
    },
    userBlock: {
        marginLeft: 'auto',
        marginRight:25
    },
    logo: {
        margin: 0,
    },
    link: {
        textDecoration:'none',
        marginLeft:95,
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
        closeActiveRoom: closeActiveRoom
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Header));