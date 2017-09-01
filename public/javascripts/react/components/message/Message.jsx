import React, {Component} from 'react';
import Account from 'material-ui/svg-icons/Action/account-circle';
import {ListItem} from 'material-ui/List';
import {teal900, teal700, teal400, teal100, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Contact from 'material-ui/svg-icons/Communication/chat';
import HiddenControlsContainer from '../../redux/containers/messagesContainer/HiddenControlsContainer';
import moment from 'moment';


class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false
        };
    }


    render(){
        var {sender, created, message} = this.props.message;
        return(
        <ListItem hoverColor={'#F6F6F6'}
                  style={style.listItem}
                  innerDivStyle={style.itemListDiv}
                  onMouseEnter={()=>{
                      this.setState({
                          hover: true
                      });
                  }}
                  onMouseLeave={()=>{
                      this.setState({
                          hover: false
                      });
                  }}
        >
            <li style={style.li}>
                <div
                    style={
                        Object.assign(
                            {backgroundColor: this.state.hover && teal100 || 'transparent'},
                            style.contactOuterBlock
                        )
                    }
                >
                    <div style={style.contactBlock}>
                        <Account style={style.avatar} />
                        <IconButton
                            style={{
                                visibility: this.state.hover && 'visible' || 'hidden'
                            }}
                            iconStyle={style.contactIcon}>
                            <Contact/>
                        </IconButton>
                    </div>
                </div>
                <div style={style.messageContent}>
                    <p style={style.title}>{sender.username}</p>
                    <p style={style.content}>
                        {message.text}
                    </p>
                    <p style={style.time}>{moment(created).fromNow()}</p>
                </div>
            </li>
            {(this.state.hover) ? <HiddenControlsContainer/>: ''}
        </ListItem>
        );
    }
}

const style = {
    avatar: {
        width: 40,
        height: 40,
        fill: teal700
    },
    li:{
        display:'flex'
    },
    listItem:{
      position: 'relative'
    },
    itemListDiv:{
        padding: '0px 16px'
    },
    contactOuterBlock:{
        paddingTop: 5,
        transition: 'transition: background-color 250ms cubic-bezier(0.4, 0.0, 0.2, 1)'
    },
    contactBlock:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    messageContent: {
      padding: '5px 10px'
    },
    title:{
        color: teal900,
        fontWeight: 700,
        fontSize: 14,
        marginTop: 5,
        marginBottom: 7
    },
    content: {
        color: teal900,
        fontSize: '14px',
        marginTop: 0,
        marginBottom: 7,
        lineHeight: '20px',
        fontWeight: 200
    },
    time:{
        color: teal400,
        fontSize: 12,
        marginTop: 0,
        marginBottom: 7
    },
    contactIcon:{
        color: 'white'
    }
}

export default Message;