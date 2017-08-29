import React,{Component} from 'react';
import {teal700, teal50} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';
import '../../../../../stylesheets/less/urlForm.less';

class UserFormContainer extends Component{
    constructor(props){
        super(props);
        this.goForwards = this.goForwards.bind(this);
    }

    goForwards(){
        this.props.swipePage(1);
    }

    render(){
        return(
            <form className="formURL" style={style.form}>
                <input type="text" ref="url" placeholder="Search user..." style={style.input} />
            </form>
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
        fontSize: 14,
        color: teal700
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

export default connect(mapStateToProps, matchDispatchToProps)(UserFormContainer);