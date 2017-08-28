import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {setProfileUser} from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserHistory } from 'react-router'
import '../../../../stylesheets/less/register.less';

class RegisterComponent extends Component{
    constructor(props){
        super(props);
        this.registerSubmit = this.registerSubmit.bind(this);
    }

    registerSubmit(event){
        event.preventDefault();
        var phone = this.refs.phone.input.value,
            username = this.refs.username.input.value,
            email = this.refs.email.input.value,
            password = this.refs.password.input.value;

        if(phone && username && email && password){
            axios.post('/api/register', {
                phone, username, email, password
            }).then((response)=>{
                window.localStorage.setItem('loggeduser', JSON.stringify(response.data.user));
                this.props.setProfileUser(response.data.user);
                this.props.history.push("/");
            }).catch((err)=>{

            });
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.registerSubmit}>
                    <TextField
                        hintText="Phone number" ref="phone"
                    /><br/>
                    <TextField
                        hintText="Username" ref="username"
                    /><br/>
                    <TextField
                        hintText="Email" ref="email"
                    /><br/>
                    <TextField
                        hintText="Password" type="password" ref="password"
                    /><br/>
                    <RaisedButton type="submit" label="Primary" primary={true} />
                </form>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setProfileUser: setProfileUser,
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        profileuser: state.profileuser
    });
}


export default connect(mapStateToProps, matchDispatchToProps)(withRouter(RegisterComponent));
