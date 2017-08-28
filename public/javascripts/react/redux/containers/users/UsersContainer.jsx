import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import NavMenu from 'material-ui/svg-icons/Navigation/menu';
import Divider from 'material-ui/Divider';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {activeUser, setUsers, addChatMessages} from '../../actions/index';
import axios from 'axios';
import randomstring from 'randomstring';
import _ from 'lodash';
import triggerWindowState from '../../../components/utils/WindowFocus';

class UsersContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            users: []
        };
        this.showUsers = this.showUsers.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.receiveMessage = this.receiveMessage.bind(this);
        this.notifyActiveUserList = this.notifyActiveUserList.bind(this);
    }

    componentWillMount(){
        this.props.socketIO.on('profileUpdated', this.updateUser);
        this.props.socketIO.on('receiveMessage', this.receiveMessage);

        axios.get("/api/users").then((response)=>{
            this.props.setUsers(response.data);
            this.setState({
                users: this.props.users.map((item)=>{
                    return {
                        _id: item._id,
                        notify: 0
                    }
                })
            });
        }).catch((err)=>{
            console.info(err);
        });
    }

    receiveMessage(data){
        var userIndex = _.findIndex(this.state.users, function(o) { return o._id == data.sender._id; });
        if(userIndex >= 0){
            if(this.props.receiver){
                if(this.props.receiver._id == data.sender._id){
                    return;
                }
            }
            this.setState({
                users: this.state.users.map((item, index)=>{
                    if(index == userIndex){
                        return{
                            _id: item._id,
                            notify: 1
                        }
                    }
                    return item;
                })
            });
        }
    }

    updateUser(updatedUser){
        var oldUsers = this.props.users;
        var elementIndex = _.findIndex(oldUsers, function(o) { return o._id == updatedUser._id; });

        if(elementIndex != -1){
            oldUsers[elementIndex] = updatedUser;
            this.props.setUsers(oldUsers);
        };

        if(this.props.receiver){
            if(this.props.receiver._id  == updatedUser._id){
                this.props.activeUser(updatedUser);
                console.info("active updated");
            }
        }
    }

    handleToggle(){
        this.setState({open: !this.state.open});
    }

    notifyActiveUserList(index){
        if(this.state.users.length){
            return (this.state.users[index].notify) ? {backgroundColor : 'peru', fontSize: 15} : {fontSize: 15};
        }
    }

    resetNotifyOnClick(index){
        if(this.state.users[index].notify){
            this.props.socketIO.emit("transferStatus", {
                status: 'Seen',
                to: this.props.users[index].socketID
            });
        }

        this.setState({
            users: this.state.users.map((item, itemIndex)=>{
                if(itemIndex == index){
                    return{
                        _id: item._id,
                        notify: 0
                    }
                }
                return item;
            })
        });
    }

    showUsers(){
        if(this.props.users){
            return this.props.users.map((item, index)=>{
                return (
                    <div
                        key={randomstring.generate(7)}
                        style={style.listWrapper}
                    >
                        <ListItem
                            style={this.notifyActiveUserList(index)}
                            onTouchTap={()=>{
                                this.setState({open: false});
                                this.props.activeUser(this.props.users[index]);
                                this.resetNotifyOnClick(index);
                                //triggerWindowState(this, this.props.socketIO, this.props.receiver);
                                this.props.addChatMessages({
                                    sender: {
                                        _id:      this.props.users[index]._id,
                                        username: this.props.users[index].username,
                                        socketID: this.props.users[index].socketID
                                    },
                                    messages: []
                                });
                            }}
                            leftAvatar={<Avatar src="http://placehold.it/32x32" />}
                            primaryText={item.username}
                        />
                        <Divider style={style.divider}/>
                    </div>
                );
            });
        }
    }

    render(){
        return(
            <div>
                <Drawer
                    containerStyle={{
                        backgroundColor: 'dimgray',
                        transition: 'width 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
                    }}
                    docked={!this.state.open}
                    width={(this.state.open) ? 250 : 72}
                    open = {true}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Subheader
                        style={style.subheader}
                    >
                        <NavMenu onTouchTap={this.handleToggle} style={style.buttonStyle}></NavMenu>
                    </Subheader>
                    <Divider style={style.divider}/>
                    <List
                        style={style.list}
                    >
                        { this.showUsers() }
                    </List>
                </Drawer>
                <Drawer
                    docked={false}
                    open={false}
                    openSecondary={true}
                    containerStyle={{
                        backgroundColor: 'dimgray',
                        width:'250px'
                    }}
                >
                    <div>Radiii</div>
                </Drawer>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        activeUser: activeUser,
        setUsers: setUsers,
        addChatMessages: addChatMessages
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        users: state.users,
        receiver: state.activeuser,
        socketIO: state.socketobject
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersContainer);


const style = {
    buttonStyle : {
        cursor: 'pointer',
        position: 'relative',
        marginLeft: '8px',
        top: '5px'
    },
    divider: {
        backgroundColor: "rgba(255, 255, 255, 0.05)"
    },
    listItem: {
        fontSize: 14
    },
    list: {
        overflowY: 'scroll',
        overflowX:'hidden',
        height: 328,
        paddingTop: 0
    },
    subheader: {
        lineHeight: '40px'
    },
    listWrapper: {
        backgroundColor: 'gray'
    }
}