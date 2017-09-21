import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import {teal900, teal800, teal700, teal500, teal400, teal50} from 'material-ui/styles/colors';
import Account from 'material-ui/svg-icons/Action/account-circle';

class PrivateMessage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListItem style={style.listItem}>
                <div style={style.innerDiv}>
                    <Account style={style.account}/>
                    <h4 style={style.h4}>Username</h4>
                </div>
                <div>
                    <p style={style.content}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <p style={style.date}>4 days ago</p>
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