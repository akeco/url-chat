import React, {Component} from 'react';
import {teal900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import URLFormContainer from '../../redux/containers/URLForm/URLFormContainer';
import ListURLContainer from '../../redux/containers/URLlist/ListURLContainer';

const muiTheme = getMuiTheme({
    palette: {
        textColor: 'rgba(255,255,255,0.9)'
    }
});

class LeftURLSidebar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MuiThemeProvider>
                <div style={style.wrapper}>
                    <URLFormContainer/>
                    <ListURLContainer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

var style = {
    wrapper: {
        minWidth: 300,
        backgroundColor:teal900
    }
};

export default LeftURLSidebar;