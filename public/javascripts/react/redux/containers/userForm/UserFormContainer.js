import React,{Component} from 'react';
import {teal500, teal300, teal50} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {showLeftSidebar} from '../../actions/index';
import styled from 'styled-components';
import '../../../../../stylesheets/less/urlForm.less';

class UserFormContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    handleRequestClose(){
        this.setState({
            open: false
        });
    }

    inputOnChange(event){
        this.props.changeFilterVal(event.target.value);
    }

    render(){
        return(
            <div className="formWrapper" style={style.formWrapper}>
                <CustomForm action="javascript:void(0)" className="formURL" style={style.form}>
                    <SearchIcon style={style.searchIcon} />
                    <TextField
                        hintText="Search user"
                        value={this.props.filterVal}
                        hintStyle={{fontSize: 14, bottom: 8}}
                        inputStyle={{fontSize: 14}}
                        underlineShow={false}
                        style={{height:40}}
                        onChange={this.inputOnChange}
                    />
                </CustomForm>
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

const CustomForm = styled.form`
    @media (max-width:647px){
        width: 242px !important;
    }
`;

var style = {
    searchIcon: {
        position:'absolute',
        right: 9,
        top: 9,
        color: teal500
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
        showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        activeRoomState: state.activeRoom
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(UserFormContainer);