import React,{Component} from 'react';
import IconButton from 'material-ui/IconButton';
import {teal600, teal50} from 'material-ui/styles/colors';
import ArrowForward from 'material-ui/svg-icons/Navigation/arrow-forward';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';
import Snackbar from 'material-ui/Snackbar';
import '../../../../../stylesheets/less/urlForm.less';

class URLFormContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.goForwards = this.goForwards.bind(this);
        this.handleURLSubmit = this.handleURLSubmit.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleRequestClose(){
        this.setState({
            open: false
        });
    }

    goForwards(){
        this.props.swipePage(1);
    }

    handleURLSubmit(event){
        event.preventDefault();
        this.props.socketIO.emit("urlInserted", {
            url: this.refs.url.value,
            user: this.props.profileuser
        });
        this.refs.url.value = '';
        this.setState({
            open: true
        });
    }

    render(){
        return(
            <div className="formWrapper" style={style.formWrapper}>
                <Snackbar
                    style={style.snackBar}
                    bodyStyle={style.snackBarBody}
                    contentStyle={style.snackBarContent}
                    open={this.state.open}
                    message="New room created"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
                <form className="formURL" style={style.form} onSubmit={this.handleURLSubmit}>
                    <input type="text" ref="url" placeholder="Insert URL" style={style.input} />
                </form>
                <IconButton
                    iconStyle={style.icons}
                    onTouchTap={this.goForwards}
                    style={style.arrowIcon}
                    className="messagesForward"
                >
                    <ArrowForward
                        hoverColor="white"
                    />
                </IconButton>
            </div>
        )
    }
}

var style = {
    snackBarBody:{
        backgroundColor: teal600
    },
    snackBarContent:{
        color: teal50
    },
    snackBar: {
        bottom: 40
    },
    formWrapper:{
        padding: '10px 18px',
        height: 40,
        display: 'flex',
        alignItems: 'center'
    },
    form:{
        width: '100%'
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
        swipePage: swipePage,
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        socketIO: state.socketobject,
        profileuser: state.profileuser
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(URLFormContainer);