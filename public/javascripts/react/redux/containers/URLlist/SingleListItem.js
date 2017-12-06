import React, {Component} from 'React';
import {teal700, teal500, teal300, teal50, tealA100} from 'material-ui/styles/colors';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Account from 'material-ui/svg-icons/Action/account-circle';
import ReactTooltip from 'react-tooltip';
import {
    activeRoom,
    closeActiveRoom,
    addPrivateRoom,
    addPrivateMessages,
    showPrependLoader
} from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {primaryTextFunction} from '../../../../../../services/utils';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import PropTypes from 'prop-types';

class SingleListItem extends Component {
    constructor(props) {
        super(props);
        this.fallBack = "https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00167-Abstract-spiral-globe-logo-design-free-online-logomaker-01.png";
        this.closeAndLeaveRoom = this.closeAndLeaveRoom.bind(this);
        this.showActiveSingleItem = this.showActiveSingleItem.bind(this);
    }

    closeAndLeaveRoom() {
        this.props.socketIO.emit("leaveRoom", {
            room: this.props.activeRoomState,
            user: this.props.profileuser
        });
        document.querySelector(".messagesListWrapper > div:first-child").style.top = "1px";
        this.props.closeActiveRoom();
        this.props.showPrependLoader(false);
    }

    showActiveSingleItem() {
        if (!this.props.tab) {
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
                                <CloseIcon color={teal300}/>
                            </IconButton>
                        }
                        leftAvatar={
                            <Avatar style={style.avatar}
                                    src={(this.props.activeRoomState.image) ? this.props.activeRoomState.image : this.fallBack}
                            />
                        }
                    >
                        <p style={style.mainRoomTitle}>
                            {this.props.activeRoomState.name}
                        </p>
                        <p data-tip data-for='headerURL'
                           style={style.overflowRouteText}
                        >
                            {this.props.activeRoomState.route}
                        </p>
                        <ReactTooltip id='headerURL' place="bottom" type="dark" effect="solid">
                            <span>{this.props.activeRoomState.route}</span>
                        </ReactTooltip>
                    </ListItem>
                </div>
            );
        }
        else if (this.props.privateRoom) {
            if (this.props.privateRoom.users) {
                var receiver = this.props.privateRoom.users.filter((item)=> item.username != this.props.profileuser.username);
                var {username} = receiver[0];
                return (
                    <div>
                        <p style={style.title}>{this.props.title}</p>
                        <ListItem
                            className="singleUserListItem"
                            primaryText={username}
                            style={Object.assign({}, style.listItem, {
                                fontSize: 14,
                                fontWeight: 400
                            })}
                            leftIcon={ <Account style={style.accountIcon} /> }
                            rightIconButton={
                                <IconButton
                                    style={{ right: 0 }}
                                    onTouchTap={()=> {
                                        this.props.addPrivateRoom(null);
                                        this.props.addPrivateMessages(null);
                                    }}
                                >
                                    <CloseIcon color={teal300}/>
                                </IconButton>
                            }
                        />
                    </div>
                );
            }
        }
    }

    render() {
        var {tab} = this.props;
        return(
            <div>
                {
                    (this.props.activeRoomState && tab == 0) && (
                        <div style={{marginBottom: 30}}>
                            {
                                this.showActiveSingleItem()
                            }
                        </div>
                    )
                }
                {
                    (this.props.privateRoom && tab == 1) && (
                        <div style={{marginBottom: 30}}>
                        {
                            this.showActiveSingleItem()
                        }
                        </div>
                    )
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
    accountIcon: {
        fill: teal500,
        width: 30,
        height: 30,
        margin: 8
    },
    title: {
        color: teal300,
        textTransform: 'uppercase',
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 10
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
        position: 'relative',
        fontSize: 14
    },
    innerWrap: {
        position: 'absolute',
        backgroundColor: teal700,
        height: '100%',
        right: 0,
        top: 2
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
        padding: '5px 16px 5px 65px',
    },
    avatar: {
        borderRadius: '100%',
        objectFit:'cover',
        width: 28,
        height: 28,
        boxShadow: '0 1px 1px 0 rgba(0,0,0,0.5)',
        top: 10,
        backgroundColor: 'white'
    },
    overflowRouteText: {
        margin: 0,
        fontSize: 12,
        display: 'inline-block',
        color: teal300,
        whiteSpace: 'nowrap',
        width: 190,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    mainRoomTitle: {
        whiteSpace: 'nowrap',
        width: 190,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        fontSize: 14,
        fontWeight: 400,
        marginBottom: 2,
        color: teal500,
        textTransform: 'uppercase'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        activeRoom,
        closeActiveRoom,
        addPrivateRoom,
        addPrivateMessages,
        showPrependLoader
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