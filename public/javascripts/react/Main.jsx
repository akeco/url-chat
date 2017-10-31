import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/index';
import Wrapper from '../react/redux/containers/componentWrapper/Wrapper';
import Homepage from './redux/containers/homepage/HomepageContainer';
import Loginpage from './redux/containers/login/Loginpage';
import LoginComponent from './redux/containers/login/LoginComponent';
import RegisterComponent from './redux/containers/login/RegisterComponent';
import Perf from 'react-addons-perf';
import 'normalize.css/normalize.css';
import '../../stylesheets/less/main.less';

window.Perf = Perf;
//Perf.start();

var store = createStore(reducers);
injectTapEventPlugin();

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Provider store={store}>
                <MuiThemeProvider>
                    <Router>
                        <Wrapper>
                            <Route exact path="/" component={Homepage}></Route>
                            <Route path="/home" component={Loginpage}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <Route path="/register" component={RegisterComponent}></Route>
                        </Wrapper>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Main;
