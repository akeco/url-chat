import React, {Component} from 'react';
import {teal900, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Account from 'material-ui/svg-icons/Action/account-circle';
import ArrowBack from 'material-ui/svg-icons/Navigation/arrow-back';
import CloseIcon from 'material-ui/svg-icons/Navigation/close';
import Contact from 'material-ui/svg-icons/Communication/chat';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage, toggleUsersMenu} from '../../actions/index';
import UserFormContainer from '../userForm/UserFormContainer';
import '../../../../../stylesheets/less/userSidebarMenu.less';

class RightUserSidebar extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.toggleUserMenu = this.toggleUserMenu.bind(this);
        this.showMembers = this.showMembers.bind(this);
    }

    goBack(){
        this.props.swipePage(1);
    }

    toggleUserMenu(){
        this.props.toggleUsersMenu(false);
    }

    showMembers(){
        if(this.props.activeRoomState){
            return this.props.activeRoomState.members.map((item)=>{
                if(item._id != this.props.profileuser._id){
                    return(
                        <ListItem
                            key={item._id}
                            className="userListItem"
                            primaryText={item.username}
                            style={style.listItem}
                            leftIcon={
                                <Account
                                    style={style.avatar}
                                />
                            }
                            rightIconButton={
                                <IconButton
                                    iconStyle={style.contact}
                                >
                                    <Contact/>
                                </IconButton>
                            }
                        />
                    );
                }
            });
        }
    }

    render(){
        var toggleMenuStyle = (this.props.showUserMenuValue) ? 300 : 0;
        return(
            <div className="rightUserMenu" style={ Object.assign({
                minWidth: toggleMenuStyle
            }, style.wrapper )}>
                <div>
                    <div style={style.sidebarHeader}>
                        <IconButton
                            style={style.arrowButton}
                            iconStyle={style.icons}
                            onTouchTap={this.goBack}
                            className="messagesBack"
                        >
                            <ArrowBack hoverColor="white"/>
                        </IconButton>
                        <IconButton
                            style={style.arrowButton}
                            iconStyle={style.icons}
                            className="closeRightMenu"
                            onTouchTap={this.toggleUserMenu}
                        >
                            <CloseIcon hoverColor="white"/>
                        </IconButton>
                        <UserFormContainer/>
                    </div>
                    <div>
                        <List
                            style={style.list}
                        >
                            {
                                this.showMembers()
                            }
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    avatar: {
        fill: teal50
    },
    contact:{
        fill: teal50
    },
    arrowButton: {
        marginLeft: -15
    },
    list: {
      paddingTop: 0
    },
    listItem:{
        color: teal50,
        fontSize: 14,
        fontWeight: 300
    },
    wrapper: {
        height: '100%',
        width: 0,
        backgroundColor: teal900,
    },
    sidebarHeader: {
        width: '100%',
        height: 60,
        display: 'flex',
        padding: '10px 18px',
        boxSizing: 'border-box',
        alignItems: 'center'
    },
    icons:{
        color: teal50,
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        swipePage: swipePage,
        toggleUsersMenu: toggleUsersMenu
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        showUserMenuValue: state.toggleUserMenu,
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(RightUserSidebar);