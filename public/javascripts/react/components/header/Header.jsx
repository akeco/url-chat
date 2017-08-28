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

const muiTheme = getMuiTheme({
    palette: {
        textColor: teal800,
    }
});

class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={style.outer}>
                <Link to="/" style={style.link}>
                    <h4 style={style.logo}>
                        Website<span style={{fontWeight:400}}>Logo</span>
                    </h4>
                </Link>
                <div className="userBlock" style={style.userBlock}>
                    <MuiThemeProvider muiTheme={muiTheme}>
                      <List style={style.list}>
                          <ListItem
                              disabled={true}
                              primaryText={'myUsername'}
                              style={style.userList}
                              rightIconButton={
                                  <IconMenu
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
                                      <MenuItem primaryText="Sign out" />
                                  </IconMenu>
                              }
                          >
                          </ListItem>
                          <ListItem
                              disabled={true}
                              style={style.settingsList}
                              rightIconButton={
                                  <IconMenu
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
    outer: {
        height:50,
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
        marginLeft:95
    },
    list:{
        display:'flex',
        padding:0
    },
    settingsList:{
        paddingLeft:0
    },
    userList:{
        paddingRight: 40,
        fontSize:14
    }
};

export default Header;