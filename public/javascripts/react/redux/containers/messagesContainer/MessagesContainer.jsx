import React, {Component} from 'react';
import Messages from '../messages/Messages';
import '../../../../../stylesheets/less/messages.less';

class MessagesContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="messagesContainer" style={style.wrapper}>
               <Messages {...this.props}/>
            </div>
        );
    }
}

var style = {
    wrapper: {
        flexGrow: 1
    }
};

export default MessagesContainer;