import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers/index';
import Wrapper from '../react/redux/containers/componentWrapper/Wrapper';
import Homepage from './redux/containers/homepage/HomepageContainer';
import 'normalize.css/normalize.css';
import '../../stylesheets/less/main.less';

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
                        </Wrapper>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Main;
