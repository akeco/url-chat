import React, {Component} from 'react';
import {teal900, teal500, teal50} from 'material-ui/styles/colors';
import {List} from 'material-ui/List';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PrivateMessage from '../../../components/message/PrivateMessage';
import {find} from 'lodash';

class PrivateMessagesContainer extends Component{
    constructor(props){
        super(props);
        this.showMessages = this.showMessages.bind(this);
    }

    showMessages(){
        if(this.props.privateRoom){
            var activeRoom = find(this.props.privateMessages, (o)=>{ return o.privateRoomID == this.props.privateRoom.privateRoomID });
            if(activeRoom){
                return activeRoom.messages.map((item)=>{
                    return <PrivateMessage key={item._id} message={item} />;
                });
            }
        }
    }

    render(){
        return(
          <div style={style.wrapper}>
              <List className="privateListContainer">
                  {
                    this.showMessages()
                  }
              </List>
          </div>
        );
    }
}

const style = {
    wrapper: {
        flexGrow: 1,
        fontSize: 14,
        color: teal900,
        fontWeight: 300,
        backgroundColor: teal500,
        padding: '5px 10px',
        borderLeft: '1px solid rgba(0,0,0,0.075)',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        privateMessages: state.privateMessages,
        privateRoom: state.privateRoom
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(PrivateMessagesContainer);