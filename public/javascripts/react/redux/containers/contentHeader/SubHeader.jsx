import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import {teal600, teal200, teal300, teal50} from 'material-ui/styles/colors';
import Close from 'material-ui/svg-icons/Navigation/close';
import StarBorder from 'material-ui/svg-icons/Toggle/star-border';
import Star from 'material-ui/svg-icons/Toggle/star';
import Notifications from 'material-ui/svg-icons/Social/notifications';
import NotificationsNone from 'material-ui/svg-icons/Social/notifications-none';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showHeaderSubmenu, closeActiveRoom, swipePage} from '../../actions/index';
import '../../../../../stylesheets/less/subheader.less';

class SubHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            notification: false,
            star: false
        };
        this.closeAndLeaveRoom = this.closeAndLeaveRoom.bind(this);
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

    closeAndLeaveRoom(){
        this.props.socketIO.emit("leaveRoom", {
            room: this.props.activeRoomState,
            user: this.props.profileuser
        });
        this.props.closeActiveRoom();
        this.props.showHeaderSubmenu(false);
        this.props.swipePage(0);
    }

    render(){
        var toggleBlock = (this.props.headerSubmenuState) ? 45 : 0;
        var toggleIcons = (this.props.headerSubmenuState) ? 1 : 0;

        return(
          <div className="subHeader" style={Object.assign({
              height: toggleBlock
          }, style.outer)}>
              <div className="mobileSubIcons" style={Object.assign({
                  opacity: toggleIcons
              }, style.iconsWrapper)}>
                  <IconButton
                      style={Object.assign({},style.iconExtend, style.closeIcon)}
                      iconStyle={style.icons}
                      onTouchTap={()=>{
                          this.closeAndLeaveRoom();
                      }}
                  >
                      <Close/>
                  </IconButton>
                  <IconButton
                      style={style.iconExtend}
                      iconStyle={style.icons}
                      onTouchTap={()=>{
                          this.changeIconsState('star')
                      }}
                  >
                      {this.toggIconChange('star', <StarBorder/>, <Star/>)}
                  </IconButton>
                  <IconButton
                      style={style.iconExtend}
                      iconStyle={style.icons}
                      onTouchTap={()=>{
                          this.changeIconsState('notification')
                      }}
                  >
                      {this.toggIconChange('notification', <NotificationsNone/>, <Notifications/>)}
                  </IconButton>
                  <IconButton
                      style={style.iconExtend}
                      className="lastHeaderIcon"
                      iconStyle={style.icons}
                      onTouchTap={this.toggleUserMenu}
                  >
                      <Menu/>
                  </IconButton>
              </div>
          </div>
        );
    }
}

var style = {
    iconsWrapper:{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 10
    },
    outer: {
        backgroundColor: teal200,
        borderBottom: '1px solid #CDC9C9',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center'
    },
    icons:{
        color: 'white'
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
        showHeaderSubmenu: showHeaderSubmenu,
        closeActiveRoom: closeActiveRoom,
        swipePage: swipePage
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        headerSubmenuState: state.headerSubmenuState,
        socketIO: state.socketobject,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(SubHeader);