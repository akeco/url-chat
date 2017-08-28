import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showHeaderSubmenu} from '../../actions/index';
import '../../../../../stylesheets/less/subheader.less';

class SubHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var toggleBlock = (this.props.headerSubmenuState) ? 48 : 0;
        return(
          <div className="subHeader" style={Object.assign({
              height: toggleBlock
          }, style.outer)}>

          </div>
        );
    }
}

var style = {
    outer: {
        backgroundColor: '#D8D8D8',
        borderBottom: '1px solid #CDC9C9',
        boxSizing: 'border-box'
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showHeaderSubmenu: showHeaderSubmenu
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        headerSubmenuState: state.headerSubmenuState
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(SubHeader);