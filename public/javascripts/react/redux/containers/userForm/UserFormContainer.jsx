import React,{Component} from 'react';
import {teal500, teal300, teal50} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import SearchIcon from 'material-ui/svg-icons/action/search';
import '../../../../../stylesheets/less/urlForm.less';

class UserFormContainer extends Component{
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
        this.props.socketIO.emit("urlInserted", {
            url: this.state.inputValue,
            user: this.props.profileuser,
            activeRoom: (this.props.activeRoomState) ? this.props.activeRoomState : null
        });
        this.setState({
            open: true,
            inputValue: ''
        });
    }


    render(){
        return(
            <div className="formWrapper" style={style.formWrapper}>
                <form className="formURL" style={style.form} onSubmit={this.handleURLSubmit}>
                    <SearchIcon style={style.searchIcon} />
                    <TextField
                        hintText="Search user"
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
                    onTouchTap={()=>{ setTimeout(()=>{
                        this.props.showLeftSidebar(false)
                    },500) }}
                >
                    <CloseIcon color={teal300} />
                </IconButton>
            </div>
        )
    }
}

var style = {
    searchIcon: {
        position:'absolute',
        right: 9,
        top: 9,
        color: teal500
    },
    formWrapper:{
        padding: '10px 10px',
        height: 40,
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


function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        activeRoomState: state.activeRoom
    });
}

export default connect(mapStateToProps)(UserFormContainer);