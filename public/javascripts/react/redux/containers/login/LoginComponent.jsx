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
            disabledForm: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.validateEmailError = this.validateEmailError.bind(this);
    }

    handleLogin(event){
        event.preventDefault();
        var {email, password} = this.refs;
        email = email.value.trim();
        password = password.value.trim();
        if(email && password && validateEmail(email)){
            this.setState({
                disabledForm: true
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
                console.info("error");
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
                color={teal50}
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

    render(){
        var emailError = (this.state.validEmail) ? 'emailError' : '';
        var disabledForm = (this.state.disabledForm) ? 'hidden loginForm' : 'loginForm';
        return(
            <div className="loginWrapper" style={style.loginWrapper}>
                <h2 style={style.websiteLogo}>WEBSITE<span style={{fontWeight:300}}>Logo</span></h2>
                <div style={style.centerBlock}>
                    <div style={style.elementWrapper}>
                        {
                            this.showProgressCircle()
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
    form:{
        width: '100%'
    },
    progress: {
        position:'absolute'
    },
    input: {
        backgroundColor: teal900,
        display: 'block',
        borderRadius: 2,
        marginBottom: 20,
        height: 36,
        border: 'none',
        outline: 'none',
        width:'100%',
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
        top: 95,
        left: 0,
        right: 0,
        margin: 'auto',
        textAlign: 'center',
        fontWeight: 600,
        color: teal700,
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

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LoginComponent));