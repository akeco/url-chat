import React, {Component} from 'react';

class MessagesContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={style.wrapper}>
               Messages Container
            </div>
        );
    }
}

var style = {
    wrapper: {
        flexGrow: 1
    }
}

export default MessagesContainer;