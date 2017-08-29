import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import Up from 'material-ui/svg-icons/Hardware/keyboard-arrow-up';
import Down from 'material-ui/svg-icons/Hardware/keyboard-arrow-down';
import Copy from 'material-ui/svg-icons/Content/content-copy';
import Report from 'material-ui/svg-icons/Action/info-outline';
import Block from 'material-ui/svg-icons/Content/block';

class HiddenControlsContainer extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div style={style.outerDiv}>
                <ul className="hiddenControls" style={style.hiddenControls}>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Vote positive"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}>
                            <Up />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Vote negative"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}>
                        >
                            <Down />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Copy content"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}
                        >
                            <Copy />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Report comment"
                            tooltipPosition="top-center"
                            iconStyle={style.smallIcon}
                            style={style.small}
                        >
                            <Report />
                        </IconButton>
                    </li>
                    <li style={style.li}>
                        <IconButton
                            tooltip="Block user"
                            tooltipPosition="top-left"
                            iconStyle={style.smallIcon}
                            style={style.small}
                        >
                            <Block />
                        </IconButton>
                    </li>
                </ul>
            </div>
        )
    }
}

const style = {
    smallIcon: {
        width: 20,
        height: 20,
        fill: '#AEABAB'
    },
    small: {
        width: 30,
        height: 30,
        padding: 0,
    },
    outerDiv: {
        position: 'absolute',
        top: -25,
        right: 30
    },
    li:{
      padding: '0 2px'
    },
    hiddenControls:{
        listStyle: 'none',
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 5,
        border: '1px solid #D9D7D7',
        paddingLeft: 0
    }
};

export default HiddenControlsContainer;