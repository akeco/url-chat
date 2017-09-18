import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Up from 'material-ui/svg-icons/Hardware/keyboard-arrow-up';
import Down from 'material-ui/svg-icons/Hardware/keyboard-arrow-down';
import Copy from 'material-ui/svg-icons/Content/content-copy';
import Report from 'material-ui/svg-icons/Action/info-outline';
import Block from 'material-ui/svg-icons/Content/block';
import {connect} from 'react-redux';
import {find} from 'lodash';

class HiddenControlsContainer extends Component{
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

    showRatingComponent(){

    }

    render(){
        var disableUpClass = (this.state.up) ? 'disableList' : '';
        var disableDownClass = (this.state.down) ? 'disableList' : '';
        return(
            <div className="desktopRatingIcons" style={style.outerDiv}>
                <ul className="hiddenControls" style={style.hiddenControls}>
                    <li className={disableUpClass} style={Object.assign(style.li, {})}>
                        <IconButton
                            disabled={this.state.up}
                            onTouchTap={this.votePositive}
                            tooltip="Vote positive"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}>
                            <Up />
                        </IconButton>
                    </li>
                    <li className={disableDownClass} style={Object.assign(style.li, {})}>
                        <IconButton
                            disabled={this.state.down}
                            onTouchTap={this.voteNegative}
                            tooltip="Vote negative"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}>
                        >
                            <Down />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Copy content"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}
                        >
                            <Copy />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Report comment"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}
                        >
                            <Report />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Block user"
                            tooltipPosition="top-left"
                            iconStyle={style.smallIcon}
                            style={style.small}
                        >
                            <Block />
                        </IconButton>
                    </li>
                </ul>
            </div>
        )
    }
}

const style = {
    smallIcon: {
        width: 20,
        height: 20,
        fill: '#AEABAB'
    },
    small: {
        width: 30,
        height: 30,
        padding: 0,
    },
    outerDiv: {
        position: 'absolute',
        top: -25,
        right: 30
    },
    li:{
      padding: '0 2px'
    },
    hiddenControls:{
        listStyle: 'none',
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 5,
        border: '1px solid #D9D7D7',
        paddingLeft: 0
    }
};

function mapStateToProps(state) {
    return ({
        socketIO: state.socketobject,
        profileUser: state.profileuser,
        activeRoomState: state.activeRoom
    });
}

export default connect(mapStateToProps)(HiddenControlsContainer);