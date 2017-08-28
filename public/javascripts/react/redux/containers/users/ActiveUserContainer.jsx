import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import DeleteIcon from 'material-ui/svg-icons/Action/delete';
import FlatButton from 'material-ui/FlatButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clearConversation} from '../../actions/index';

class ActiveUserContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            openDialog: false
        };

        this.clearConversation = this.clearConversation.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.deleteConversationDialog = this.deleteConversationDialog.bind(this);
    }

    deleteConversationDialog(){
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog(){
        this.setState({
            openDialog: false
        });
    }

    clearConversation(){
        this.props.clearConversation({
            _id: this.props.activeuser._id
        });
        this.handleCloseDialog();
    }

    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCloseDialog}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                onTouchTap={this.clearConversation}
            />
        ];
        return(
            <div>
                <ListItem
                    primaryText={this.props.activeuser.username}
                    leftAvatar={<Avatar src="http://placehold.it/32x32" />}
                    rightIcon={<DeleteIcon
                        onTouchTap={this.deleteConversationDialog}
                        hoverColor={'white'}
                    />}
                    style={style.activeUser}
                ></ListItem>
                <Dialog
                    title="Delete conversation?"
                    actions={actions}
                    modal={false}
                    open={this.state.openDialog}
                    onRequestClose={this.handleCloseDialog}
                >
                    Conversation will be permanently deleted.
                    Are you sure you want delete?
                </Dialog>
            </div>
            );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clearConversation: clearConversation
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        activeuser: state.activeuser,
        chatMessages: state.chatmessages
    });
}

var style = {
    activeUser: {
        fontSize: 14,
        backgroundColor: 'darkgray',
        position: 'relative',
        zIndex:999,
        boxShadow: '0 3px 3px 0 rgba(0,0,0,0.5)'
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(ActiveUserContainer);