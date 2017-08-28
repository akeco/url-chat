import React,{Component} from 'react';
import IconButton from 'material-ui/IconButton';
import {teal50} from 'material-ui/styles/colors';
import ArrowForward from 'material-ui/svg-icons/Navigation/arrow-forward';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';
import '../../../../../stylesheets/less/urlForm.less';

class URLFormContainer extends Component{
    constructor(props){
        super(props);
        this.goForwards = this.goForwards.bind(this);
    }

    goForwards(){
        this.props.swipePage(1);
    }

    render(){
        return(
            <div className="formWrapper" style={style.formWrapper}>
                <form className="formURL" style={style.form}>
                    <input type="text" ref="url" placeholder="Insert URL" style={style.input} />
                </form>
                <IconButton
                    iconStyle={style.icons}
                    onTouchTap={this.goBack}
                    style={style.arrowIcon}
                    className="messagesForward"
                >
                    <ArrowForward
                        hoverColor="white"
                        onTouchTap={this.goForwards}
                    />
                </IconButton>
            </div>
        )
    }
}

var style = {
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
        pageIndex: state.pageIndex
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(URLFormContainer);