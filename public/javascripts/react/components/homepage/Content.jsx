import React, {Component} from 'react';
import ContentHeader from '../../redux/containers/contentHeader/ContentHeader';
import SubHeader  from '../../redux/containers/contentHeader/SubHeader';
import MessagesContainer  from '../../redux/containers/messagesContainer/MessagesContainer';
import MessageForm  from '../../redux/containers/messagesContainer/MessageForm';

class Content extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={style.mainWrap}>
                <ContentHeader/>
                <SubHeader/>
                <MessagesContainer/>
                <MessageForm/>
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
}

export default Content;