import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {teal900, teal700, teal500, teal50} from 'material-ui/styles/colors';
import {validateEmail} from '../../../../../../services/utils';
import { setProfileUser } from '../../actions/index';
import axios from 'axios';

class RegisterComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            disabledForm: false,
            validEmail: false,
            validPassword: false,
            warning: false
        };
        this.handleRegistration = this.handleRegistration.bind(this);
        this.showProgressCircle = this.showProgressCircle.bind(this);
        this.validateEmailError = this.validateEmailError.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.showWarning = this.showWarning.bind(this);
    }

    handleRegistration(event){
        event.preventDefault();
        var {username, email, password, confirmPass} = this.refs;
        username = username.value.trim();
        email = email.value.trim();
        password = password.value.trim();
        confirmPass = confirmPass.value.trim();
        if(username && password && confirmPass && password == confirmPass && validateEmail(email)){
            this.setState({
                validEmail: false,
                validPassword: false,
                disabledForm: true,
                warning: false
            });

            axios.post("/register",{
                data: {
                    username,
                    email,
                    password,
                    confirmPass,
                    socketID: this.props.temporaryUser.socketID
                }
            }).then((response)=>{
                this.props.setProfileUser(response.data);
                window.localStorage.setItem("currentUser", JSON.stringify(response.data));
                setTimeout(()=>{
                    this.props.history.push("/");
                }, 2000);
            }).catch((err)=>{
                setTimeout(()=>{
                    this.setState({
                        disabledForm: false,
                        warning: true
                    });
                }, 2000);
            });

            this.refs.username.value = '';
            this.refs.email.value = '';
            this.refs.password.value = '';
            this.refs.confirmPass.value = '';
        }
    }

    validateEmailError(event){
        if(event.target.value.length && !validateEmail(event.target.value)){
            this.setState({
                validEmail: true
            });
        }
        else{
            this.setState({
                validEmail: false
            });
        }
    }

    validatePassword(event){
        if(event.target.value != this.refs.password.value && event.target.value && this.refs.password.value){
            this.setState({
                validPassword: true
            });
        }
        else{
            this.setState({
                validPassword: false
            });
        }
    }

    showProgressCircle(){
        if(this.state.disabledForm){
            return  <CircularProgress
                style={style.progress}
                size={60}
                thickness={7}
                color={teal50}
            />;
        }
    }

    showWarning(){
        if(this.state.warning){
            return(
                <p style={style.warning}>
                    Username or Email already exist
                </p>
            );
        }
    }

    render(){
        var emailError = (this.state.validEmail) ? 'emailError' : '';
        var passwordError = (this.state.validPassword) ? 'passwordError' : '';
        var disabledForm = (this.state.disabledForm) ? 'hidden loginForm' : 'loginForm';
        return(
            <div className="loginWrapper" style={style.loginWrapper}>
                <img style={style.websiteLogo} src="../../../../../images/forum_final_1.png"/>
                <div style={style.centerBlock}>
                    <div style={style.elementWrapper}>
                        {
                            this.showProgressCircle()
                        }
                        {
                            this.showWarning()
                        }
                        <form
                            onSubmit={this.handleRegistration}
                            style={style.form}
                            className={disabledForm}
                        >
                            <input
                                ref="username"
                                type="text"
                                placeholder="Username"
                                style={style.input}
                                maxLength="35"
                            />
                            <input
                                className={emailError}
                                ref="email"
                                type="text"
                                placeholder="Enter email"
                                style={style.input}
                                onChange={this.validateEmailError}
                            />
                            <input
                                ref="password"
                                type="password"
                                placeholder="Enter password"
                                style={style.input}
                            />
                            <input
                                className={passwordError}
                                ref="confirmPass"
                                type="password"
                                placeholder="Confirm password"
                                style={style.input}
                                onChange={this.validatePassword}
                            />
                            <RaisedButton
                                label="Register"
                                style={{width:'100%'}}
                                labelColor={teal700}
                                backgroundColor={teal50}
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    warning:{
        color: teal50,
        fontSize: 12,
        alignSelf: 'flex-end',
        cursor: 'default'
    },
    progress: {
        position:'absolute'
    },
    form:{
        width: '100%'
    },
    input: {
        backgroundColor: teal900,
        display: 'block',
        borderRadius: 2,
        marginBottom: 20,
        height: 36,
        border: 'none',
        outline: 'none',
        width: '100%',
        fontSize: 14,
        paddingLeft: 10,
        boxSizing: 'border',
        color: teal50,
        border: '1px solid',
        borderColor: teal500,
        boxSizing: 'border-box'
    },
    websiteLogo:{
        position: 'absolute',
        width: 200,
        top: 45,
        left: 0,
        right: 0,
        margin: 'auto',
        cursor: 'default'
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
        backgroundColor: teal700,
        padding: '70px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.3), inset 0 -2px 4px 0 rgba(0,0,0,0.3)',
        backgroundImage: 'url(\'../../../../../../images/login-back.png\')',
        backgroundSize: 'cover'
    },
    loginWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: teal50,
        position: 'relative'
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setProfileUser: setProfileUser
    }, dispatch);
}


function mapStateToProps(state) {
    return ({
        temporaryUser: state.temporaryUser,
        profileuser: state.profileuser
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(RegisterComponent));