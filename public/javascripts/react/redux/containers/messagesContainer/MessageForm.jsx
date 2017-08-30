import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Add from 'material-ui/svg-icons/Content/add';
import Send from 'material-ui/svg-icons/Content/send';
import {teal700, teal100, teal50} from 'material-ui/styles/colors';
import '../../../../../stylesheets/less/messageForm.less';

class MessageForm extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={style.wrapper}>
                <form action="javascript:void(0)" style={style.form}>
                    <FlatButton
                        className="addButton"
                        style={style.buttonStyle}
                        icon={
                            <Add
                                style={style.addIcon}
                            />
                        }
                    >
                        <input type="file" style={style.uploadInput} />
                    </FlatButton>
                    <textarea style={style.inputText} placeholder="Type message..."/>
                    <FlatButton
                        style={style.sendButtonStyle}
                        icon={<Send
                            style={style.sendIcon}
                        />}
                    >
                        <input type="submit" style={style.uploadInput} />
                    </FlatButton>
                </form>
            </div>
        );
    }
}

var style = {
    wrapper: {
       // position: 'absolute',
       // bottom: 41,
        //backgroundColor: '#D8D8D8',
        backgroundColor: teal100,
        height: 90,
        width: '100%',
        marginBottom: 41,
        borderTop: '1px solid rgba(255,255,255,0.5)'
    },
    uploadButton: {
        verticalAlign: 'middle',
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
    form: {
        display:'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15
    },
    inputText: {
        outline:'none',
        backgroundColor: 'transparent',
        border: '2px solid white',
        height: 60,
        fontSize: 16,
        boxSizing: 'border-box',
        flexGrow: 1,
        fontSize: 14,
        color: teal700,
        resize: 'none',
        padding: '10px 20px',
        lineHeight: '20px'
    },
    addIcon: {
        fill: 'white'
    },
    sendIcon:{
        fill: teal700
    },
    buttonStyle: {
        height: 60,
        border: '2px solid white',
        borderRight: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        minWidth: 60
    },
    sendButtonStyle: {
        height: 60,
        border: '2px solid white',
        borderLeft: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        minWidth: 60,
        backgroundColor: teal50
    }
}

export default MessageForm;