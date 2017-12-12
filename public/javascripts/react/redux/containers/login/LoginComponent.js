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

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            disabledForm: false,
            warning: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.validateEmailError = this.validateEmailError.bind(this);
        this.showWarning = this.showWarning.bind(this);
    }

    handleLogin(event){
        event.preventDefault();
        var {email, password} = this.refs;
        email = email.value.trim();
        password = password.value.trim();
        if(email && password && validateEmail(email)){
            this.setState({
                disabledForm: true,
                warning: false
            });

            axios.post("/login",{
                data: {
                    email,
                    password
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

            this.refs.email.value = '';
            this.refs.password.value = '';
        }
    }

    showProgressCircle(){
        if(this.state.disabledForm){
            return  <CircularProgress
                style={style.progress}
                size={60}
                thickness={7}
                color={teal500}
            />;
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

    showWarning(){
        if(this.state.warning){
            return(
                <p style={style.warning}>
                    Wrong username or password
                </p>
            );
        }
    }

    render(){
        var emailError = (this.state.validEmail) ? 'emailError' : '';
        var disabledForm = (this.state.disabledForm) ? 'hidden loginForm' : 'loginForm';
        return(
            <div className="loginWrapper" style={style.loginWrapper}>
                <div style={style.imageWrapper}>
                    <img style={style.websiteLogo} src="../../../../../images/forum_final_1_white.png"/>
                </div>
                <div style={style.centerBlock}>
                    <div style={style.elementWrapper}>
                        {
                            this.showProgressCircle()
                        }
                        {
                            this.showWarning()
                        }
                        <form
                            onSubmit={this.handleLogin}
                            style={style.form}
                            className={disabledForm}>
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
                            <RaisedButton
                                label="Login"
                                style={{width:'100%'}}
                                labelColor={teal50}
                                backgroundColor={teal500}
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
                <div style={{flexGrow:1}}></div>
            </div>
        )
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
    warning:{
        color: teal50,
        fontSize: 12,
        alignSelf: 'flex-end',
        cursor: 'default'
    },
    form:{
        width: '100%'
    },
    progress: {
        position:'absolute'
    },
    input: {
        backgroundColor: 'white',
        display: 'block',
        borderRadius: 2,
        marginBottom: 20,
        height: 36,
        outline: 'none',
        width:'100%',
        fontSize: 14,
        paddingLeft: 10,
        boxSizing: 'border',
        color: teal500,
        border: '1px solid rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box'
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
        setProfileUser: setProfileUser
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        temporaryUser: state.temporaryUser,
        profileuser: state.profileuser
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LoginComponent));