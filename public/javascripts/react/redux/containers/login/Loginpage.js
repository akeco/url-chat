import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {teal900, teal700, teal400, teal500, teal100, teal50} from 'material-ui/styles/colors';
import { setProfileUser } from '../../actions/index';
import axios from 'axios';

class Loginpage extends Component{
    constructor(props){
        super(props);
        this.homepageRedirect = this.homepageRedirect.bind(this);
        this.loginRedirect = this.loginRedirect.bind(this);
        this.registerRedirect = this.registerRedirect.bind(this);
    }

    homepageRedirect(){
        axios.post("/api/user/save", {
            data:{
                user: this.props.temporaryUser
            }
        }).then((response)=>{
            this.props.setProfileUser(response.data);
            window.localStorage.setItem("currentUser", JSON.stringify(response.data));
            this.props.history.push("/");
        }).catch((err)=>{
            console.info(err);
        });
    }

    loginRedirect(){
        this.props.history.push("/login");
    }

    registerRedirect(){
        this.props.history.push("/register");
    }

    render(){
        return(
            <div className="loginWrapper" style={style.loginWrapper}>
                <div style={style.imageWrapper}>
                    <img style={style.websiteLogo} src="../../../../../images/forum_final_1_white.png"/>
                </div>
                <div style={style.centerBlock}>
                   <div style={style.elementWrapper}>
                       <RaisedButton
                           label={`Continue as ${ (this.props.temporaryUser) && this.props.temporaryUser.username }`}
                           onTouchTap={this.homepageRedirect}
                           style={style.guestButton}
                           backgroundColor={'white'}
                           labelColor={teal500}
                       />
                       <RaisedButton
                           label="Login"
                           style={style.buttons}
                           labelColor={teal50}
                           backgroundColor={teal500}
                           onTouchTap={this.loginRedirect}
                       />
                       <RaisedButton
                           label="Register"
                           style={{width:'100%'}}
                           labelColor={teal50}
                           backgroundColor={teal500}
                           onTouchTap={this.registerRedirect}
                       />
                   </div>
                </div>
                <div style={{flexGrow:1}}></div>
            </div>
        );
    }
}

const style = {
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    websiteLogo:{
        position: 'absolute',
        width: 160,
        cursor: 'default'
    },
    guestButton: {
        width: '100%',
        marginBottom: 20
    },
    buttons: {
        width: '100%',
        marginBottom: 20
    },
    elementWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 270
    },
    centerBlock: {
        width: '100%',
        backgroundColor: teal50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        //boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.3), inset 0 -2px 4px 0 rgba(0,0,0,0.3)',
        flexGrow: 1
    },
    loginWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: teal500,
        position: 'relative'
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setProfileUser
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        temporaryUser: state.temporaryUser,
        profileuser: state.profileuser,
        socketIO: state.socketobject
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Loginpage));