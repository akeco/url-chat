import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import {teal900, teal800, teal700, teal500, teal400, teal50} from 'material-ui/styles/colors';
import Account from 'material-ui/svg-icons/Action/account-circle';
import moment from 'moment';

class PrivateMessage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var {message, sender, created} = this.props.message;
        return(
            <ListItem style={style.listItem}>
                <div style={style.innerDiv}>
                    <Account style={style.account}/>
                    <h4 style={style.h4}>{ sender.username }</h4>
                </div>
                <div>
                    <p style={style.content}>
                        { message.text }
                    </p>
                    <p style={style.date}>{moment(created).fromNow()}</p>
                </div>
            </ListItem>
        );
    }
}

const style = {
    account: {
        fill: teal700
    },
    h4: {
        margin: 0,
        marginTop: 5,
        marginLeft: 10,
        fontSize: 14,
        color: teal900
    },
    innerDiv: {
        display: 'flex'
    },
    listItem: {
        borderRadius: 3,
        backgroundColor: 'white',
        marginBottom: 10
    },
    date: {
        fontSize: 12,
        fontWeight: 'normal',
        margin: 0,
        color: teal400
    },
    content: {
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 400,
        marginBottom: 7,
        marginTop: 7,
        color: teal800
    }
};

export default PrivateMessage;