import React, {Component} from 'react';
import {teal800, teal700, teal50} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Profile from 'material-ui/svg-icons/Action/perm-identity';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getRooms, activeRoom, addChatMessages } from '../../actions/index';
import LinearProgress from 'material-ui/LinearProgress';
import axios from 'axios';

class ListURLContainer extends Component{
    constructor(props){
        super(props);
        this.displayActiveRooms = this.displayActiveRooms.bind(this);
        this.addActiveRoom = this.addActiveRoom.bind(this);
    }


    componentDidMount(){
        axios.get('/api/rooms').then((response)=>{
            this.props.getRooms(response.data);
        }).catch((err)=>{
            console.info(err);
        });
    }

    addActiveRoom(room){
        this.props.activeRoom(room);
        this.props.socketIO.emit("joinRoom", room.roomID);
        axios.get(`/api/messages/${room.roomID}`).then((response)=>{
            this.props.addChatMessages({
                receiver: (this.props.activeRoomState) && this.props.activeRoomState,
                messages: response.data
            });
        }).catch((err)=>{
            console.info("error",err);
        });
    }

    displayActiveRooms(){
        if(this.props.rooms){
            return this.props.rooms.map((room)=>{
                return(
                    <ListItem
                        key={room._id}
                        style={style.listItem}
                        primaryText={room.name}
                        innerDivStyle={style.innerDiv}
                        onTouchTap={()=>{
                            this.addActiveRoom(room);
                        }}
                        leftAvatar={<Avatar style={style.avatar} src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1678/s300/inceptures-software-school-logo.png" />}
                    >
                        <div style={style.innerWrap}>
                            <div style={style.relativeWrap}>
                                <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                                    <Profile/>
                                </IconButton>
                                <div style={style.counter}>{ (room.members.length) && room.members.length || 0 }</div>
                            </div>
                        </div>
                    </ListItem>
                );
            });
        }
        else{
            return <LinearProgress color={teal50} mode="indeterminate" />
        }
    }

    render() {
        return (
            <List style={style.list}>
                {this.displayActiveRooms()}
            </List>
        );
    }

    /*
    render(){
        return(
            <List style={style.list}>
                <ListItem
                    style={style.listItem}
                    primaryText="Google.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://www.wired.com/wp-content/uploads/2015/09/google-logo-1200x630.jpg" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>1000</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Reddit.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://media.glassdoor.com/sqll/796358/reddit-squarelogo-1490630845152.png" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>800</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Github.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdc_GbydIBAy4EDJ4dyfRQfNVuKcJT0dKpMkybNVhwGNMxPrL" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Slack.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://a.slack-edge.com/436da/marketing/img/meta/app-256.png" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Paypal.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="http://www.underconsideration.com/brandnew/archives/paypal_2014_logo_detail.png" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Apple.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://image.freepik.com/free-icon/apple-logo_318-40184.jpg" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Samsung.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="http://wirelesstradersinc.com/wp-content/uploads/2016/02/Samsung-Logo.png" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Ebay.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://blog.trackduck.com/wp-content/uploads/2015/05/Screen-Shot-2015-05-06-at-14.10.31-310x358.png" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
                <ListItem
                    style={style.listItem}
                    primaryText="Gearbest.com"
                    innerDivStyle={style.innerDiv}
                    leftAvatar={<Avatar style={style.avatar} src="https://www.trustmus.com/_theme/uploads/x147124339757b164854add257b164854ae18.jpg.pagespeed.ic.9HINIs0HQP.jpg" />}
                >
                    <div style={style.innerWrap}>
                        <IconButton style={style.memberNumb} iconStyle={style.profileIcon}>
                            <Profile/>
                        </IconButton>
                        <div style={style.counter}>650</div>
                    </div>
                </ListItem>
            </List>
        )
    }
    */
}

var style = {
    list: {
        padding:0,
        height: 315,
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    listItem:{
        backgroundColor: teal800,
        border: '1px solid rgba(255,255,255,0.15)',
        color: 'white',
        fontWeight: 300,
        marginBottom: 5,
        position: 'relative'
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
        padding: '15px 16px 15px 72px',
        textShadow: '0 1px 1px rgba(0,0,0,0.2)'
    },
    avatar: {
        borderRadius: '40%',
        objectFit:'cover',
        width: 30,
        height: 30,
        boxShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.3)',
        backgroundColor: 'white'
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getRooms: getRooms,
        activeRoom: activeRoom,
        addChatMessages: addChatMessages
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        rooms: state.rooms,
        socketIO: state.socketobject,
        chatMessages: state.chatmessages,
        activeRoomState: state.activeRoom
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(ListURLContainer);