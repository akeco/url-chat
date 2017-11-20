import React,{Component} from 'react';
import {teal600, teal300, teal50} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadSpinner, showLeftSidebar} from '../../actions/index';
import { Loader } from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import '../../../../../stylesheets/less/urlForm.less';


class URLFormContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            inputValue: ''
        };
        this.handleURLSubmit = this.handleURLSubmit.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    handleRequestClose(){
        this.setState({
            open: false
        });
    }

    inputOnChange(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    handleURLSubmit(event){
        event.preventDefault();
        console.info("HANDLED");
        if(this.state.inputValue.trim()){
            this.props.socketIO.emit("urlInserted", {
                url: this.state.inputValue.toLowerCase(),
                user: this.props.profileuser,
                activeRoom: (this.props.activeRoomState) ? this.props.activeRoomState : null
            });
            this.props.loadSpinner(true);
            this.setState({
                inputValue: ''
            })
        }
    }

    render(){
        return(
            <div className="formWrapper" style={style.formWrapper}>
                <form className="formURL" style={style.form} onSubmit={this.handleURLSubmit}>
                    <TextField
                        hintText="Insert URL"
                        value={this.state.inputValue}
                        hintStyle={{fontSize: 14, bottom: 8}}
                        inputStyle={{fontSize: 14}}
                        underlineShow={false}
                        style={{height:40}}
                        onChange={this.inputOnChange}
                    />
                </form>
                <IconButton
                    className="mobileNavIcon"
                    style={{marginRight: -10}}
                    onTouchTap={()=>{
                        this.props.showLeftSidebar(false)
                    }}
                >
                    <CloseIcon color={teal300} />
                </IconButton>
            </div>
        )
    }
}

var style = {
    spinner: {
        position: 'absolute',
        right: 5,
        top: 6
    },
    snackBarBody:{
        backgroundColor: teal600
    },
    snackBarContent:{
        color: teal50
    },
    formWrapper:{
        padding: '10px',
        display: 'flex',
        alignItems: 'center'
    },
    form:{
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 2,
        paddingLeft: 10,
        boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)'
    },
    input:{
        width: '100%',
        borderRadius: 3,
        height: 35,
        border: '1px solid rgba(0,96,100,0.3)',
        outline: 'none',
        boxSizing: 'border-box',
        paddingLeft: 10,
        fontSize: 14
    },
    arrowIcon:{
        marginRight: -15
    },
    icons:{
        color: teal50,
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loadSpinner,
        showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        activeRoomState: state.activeRoom,
        spinner: state.spinner
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(URLFormContainer);