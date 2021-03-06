import React, {Component} from 'react';

import MessagesContainer  from '../../redux/containers/messagesContainer/MessagesContainer';
import MessageForm  from '../../redux/containers/messagesContainer/MessageForm';

class Content extends Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.tab == nextProps.currentTab) return true;
        return false;
    }

    render(){
        return(
            <div className="messagingContent" style={style.mainWrap}>
                <MessagesContainer {...this.props} />
                <MessageForm {...this.props} />
            </div>
        );
    }
}

var style = {
    mainWrap: {
        width:'100%',
        display:'flex',
        flexDirection: 'column',
        position: 'relative'
    }
};

export default Content;