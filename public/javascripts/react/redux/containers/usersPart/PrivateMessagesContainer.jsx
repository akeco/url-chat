import React, {Component} from 'react';
import {teal900, teal500, teal50} from 'material-ui/styles/colors';
import {List} from 'material-ui/List';
import PrivateMessage from '../../../components/message/PrivateMessage';

class PrivateMessagesContainer extends Component{
    constructor(props){
        super(props);
        this.showMessages = this.showMessages.bind(this);
    }

    showMessages(){

    }

    render(){
        return(
          <div style={style.wrapper}>
              <List>
               <PrivateMessage/>
               <PrivateMessage/>
               <PrivateMessage/>
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
        //backgroundColor: teal50,
        padding: '5px 10px',
        borderLeft: '1px solid rgba(0,0,0,0.075)',
        overflowY: 'scroll',
        overflowX: 'hidden'
    }
};

export default PrivateMessagesContainer;