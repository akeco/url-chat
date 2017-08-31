import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {teal700, teal50} from 'material-ui/styles/colors';
import { setProfileUser } from '../../actions/index';
import axios from 'axios';

class Loginpage extends Component{
    constructor(props){
        super(props);
        this.homepageRedirect = this.homepageRedirect.bind(this);
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


    render(){
        return(
            <div className="loginWrapper" style={style.loginWrapper}>
                <div style={style.innerDiv}>
                    <RaisedButton
                        label={`Continue as ${ (this.props.temporaryUser) && this.props.temporaryUser.username }`}
                        labelColor={teal700}
                        onTouchTap={this.homepageRedirect}
                    />
                    <br/>
                    <RaisedButton label="Login" labelColor={teal700} />
                    <br/>
                    <RaisedButton label="Register" labelColor={teal700} />
                </div>
            </div>
        );
    }
}

const style = {
    loginWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: teal50
    },
    innerDiv:{
        display:'flex',
        flexDirection:'column'
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
        profileuser: state.profileuser,
        socketIO: state.socketobject
    });
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Loginpage));