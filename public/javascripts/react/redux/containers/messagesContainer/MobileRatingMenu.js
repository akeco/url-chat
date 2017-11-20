import React, {Component} from 'react';
import {teal400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import More from 'material-ui/svg-icons/Navigation/more-vert';
import Up from 'material-ui/svg-icons/Hardware/keyboard-arrow-up';
import Down from 'material-ui/svg-icons/Hardware/keyboard-arrow-down';
import Report from 'material-ui/svg-icons/Action/info-outline';
import Block from 'material-ui/svg-icons/Content/block';
import {connect} from 'react-redux';
import {find} from 'lodash';

class MobileRatingMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            up: false,
            down: false
        };
        this.message = this.props.message;
        this.votePositive = this.votePositive.bind(this);
        this.voteNegative = this.voteNegative.bind(this);
    }

    componentWillMount(){
        if(this.message.ratingUsers.length){
            var findUser = find(this.message.ratingUsers, (o)=>{ return o._id == this.props.profileUser._id; });
            if(findUser && findUser.vote){
                switch (findUser.vote){
                    case 'up':
                        this.setState({
                            up: true,
                            down: false
                        });
                        break;
                    case 'down':
                        this.setState({
                            up: false,
                            down: true
                        });
                        break;
                }
            }
        }
    }

    votePositive(){
        console.info("Voted positive");

        if(!this.state.up && !this.state.down){
            this.setState({
                up: true,
                down: false
            });
        }
        else if(this.state.down){
            this.setState({
                up: false,
                down: false
            });
        }

        this.props.profileUser.vote = 'up';
        this.props.socketIO.emit("voting", {
            vote: 'up',
            roomID: this.props.activeRoomState.roomID,
            messageID: this.message._id,
            user: this.props.profileUser
        });
    }

    voteNegative(){
        console.info("Voted Negative");

        if(!this.state.up && !this.state.down){
            this.setState({
                up: false,
                down: true
            });
        }
        else if(this.state.up){
            this.setState({
                up: false,
                down: false
            });
        }

        this.props.profileUser.vote = 'down';
        this.props.socketIO.emit("voting", {
            vote: 'down',
            roomID: this.props.activeRoomState.roomID,
            messageID: this.message._id,
            user: this.props.profileUser
        });
    }

    render(){
        return (
            <IconMenu
                className="showMore"
                style={style.showMore}
                iconButtonElement={
                    <IconButton>
                        <More color={teal400}/>
                    </IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem
                    disabled={this.state.up}
                    onTouchTap={this.votePositive}
                    primaryText="Vote positive"
                    leftIcon={<Up />}
                />
                <MenuItem
                    disabled={this.state.down}
                    onTouchTap={this.voteNegative}
                    primaryText="Vote negative"
                    leftIcon={<Down />}
                />
                <MenuItem
                    primaryText="Report comment"
                    leftIcon={<Report />}
                />
                <MenuItem
                    primaryText="Block user"
                    leftIcon={<Block />}
                />
            </IconMenu>);
    }
}

const style = {
    showMore:{
        marginLeft: 'auto',
        alignSelf: 'center'
    },
};

function mapStateToProps(state) {
    return ({
        socketIO: state.socketobject,
        profileUser: state.profileuser,
        activeRoomState: state.activeRoom
    });
}

export default connect(mapStateToProps)(MobileRatingMenu);