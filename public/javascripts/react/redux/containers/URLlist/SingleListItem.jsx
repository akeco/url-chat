import React, {Component} from 'React';
import {teal800, teal700, teal500, teal400, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Account from 'material-ui/svg-icons/Action/account-circle';
import Contact from 'material-ui/svg-icons/Communication/chat';
import ReactTooltip from 'react-tooltip';
import {activeRoom, closeActiveRoom, addPrivateRoom} from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {primaryTextFunction} from '../../../../../../services/utils';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import PropTypes from 'prop-types';

class SingleListItem extends Component{
    constructor(props){
        super(props);
        this.fallBack = "https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00167-Abstract-spiral-globe-logo-design-free-online-logomaker-01.png";
        this.closeAndLeaveRoom = this.closeAndLeaveRoom.bind(this);
        this.showActiveSingleItem = this.showActiveSingleItem.bind(this);
    }

    closeAndLeaveRoom(){
        setTimeout(()=>{
            this.props.socketIO.emit("leaveRoom", {
                room: this.props.activeRoomState,
                user: this.props.profileuser
            });
            this.props.closeActiveRoom();
        }, 500);
    }

    showActiveSingleItem(){
        if(!this.props.tab){
            return (
                <div>
                    <p style={style.title}>{this.props.title}</p>
                    <ListItem
                        style={style.listItem}
                        innerDivStyle={Object.assign(style.innerDiv)}
                        rightIconButton={
                            <IconButton
                                onTouchTap={this.closeAndLeaveRoom}
                                style={{
                                    top: 0,
                                    right: 0
                                }}
                            >
                                <CloseIcon color={teal300} />
                            </IconButton>
                        }
                        leftAvatar={
                            <Avatar style={style.avatar}
                                    src={(this.props.activeRoomState.image) ? this.props.activeRoomState.image : this.fallBack}
                            />
                        }
                    >
                        <p style={{
                            margin:0,
                            fontSize: 16,
                            marginBottom: 2,
                            color: teal500
                        }}>
                            {this.props.activeRoomState.name}
                        </p>
                        <p data-tip data-for='headerURL'
                           style={Object.assign({}, style.route, {
                               margin: 0,
                               fontSize: 13,
                               display: 'inline-block',
                               color: teal300
                           })}
                        >
                            {primaryTextFunction(this.props.activeRoomState.route, 30)}
                        </p>
                        <ReactTooltip id='headerURL' place="bottom" type="dark" effect="solid">
                            <span>{this.props.activeRoomState.route}</span>
                        </ReactTooltip>
                    </ListItem>
                </div>
            );
        }
        else if(this.props.privateRoom) {
            if(this.props.privateRoom.users){
                var receiver = this.props.privateRoom.users.filter((item)=> item.username != this.props.profileuser.username);
                var {username} = receiver[0];
                return(
                    <div>
                        <p style={style.title}>{this.props.title}</p>
                        <ListItem
                            className="singleUserListItem"
                            primaryText={username}
                            style={Object.assign({},style.listItem,{fontSize: 16})}
                            leftIcon={ <Account/> }
                            rightIconButton={
                                <IconButton
                                    onTouchTap={()=>{
                                        setTimeout(()=>{
                                            this.props.addPrivateRoom(null);
                                        },500);
                                    }}
                                    style={{
                                        top: 0,
                                        right: 0
                                    }}
                                >
                                    <CloseIcon color={teal300} />
                                </IconButton>
                            }
                        />
                    </div>
                );
            }
        }
    }

    render(){
        return(
            <div style={{marginBottom: 30}}>
                {
                    this.showActiveSingleItem()
                }
            </div>
        );
    }
}

SingleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  tab: PropTypes.number.isRequired
};

var style = {
    title: {
        color: teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5
    },
    subListItemInner:{
        padding: '10px 15px'
    },
    wrapSubList: {
        marginTop: -3
    },
    listItem:{
        backgroundColor: 'white',
        borderTop: `1px solid ${tealA100}`,
        borderBottom: `1px solid ${tealA100}`,
        color: teal500,
        fontWeight: 300,
        //marginBottom: 3,
        position: 'relative',
        fontSize: 14
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: teal700,
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
        padding: '7px 16px 7px 65px',
    },
    avatar: {
        borderRadius: '100%',
        objectFit:'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        top: 10,
        backgroundColor: 'white'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        activeRoom,
        closeActiveRoom,
        addPrivateRoom
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        activeRoomState: state.activeRoom,
        profileuser: state.profileuser,
        socketIO: state.socketobject,
        privateRoom: state.privateRoom
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(SingleListItem);