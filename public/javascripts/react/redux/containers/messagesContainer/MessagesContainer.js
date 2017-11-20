import React from 'react';
import Messages from '../messages/Messages';
import '../../../../../stylesheets/less/messages.less';

const MessagesContainer = (props) => {
    return(
        <div className="messagesContainer" style={style.wrapper}>
            <Messages {...props}/>
        </div>
    );
}

var style = {
    wrapper: {
        flexGrow: 1
    }
};

export default MessagesContainer;