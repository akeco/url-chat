import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import '../../../../stylesheets/less/userSidebarMenu.less';

class RightUserSidebar extends Component{
    constructor(props){
        super(props);
    }


    render(){
        var toggleMenuStyle = (this.props.showUserMenuValue) ? 300 : 0;
        return(
            <div className="userSidebarMenu" style={{
                width: 0,
                minWidth: toggleMenuStyle,
                borderLeft: '1px solid rgb(231, 228, 228)'
            }}>
                Right
            </div>
        );
    }
}

const style = {
    wrapper: {
        borderLeft: '1px solid rgb(231, 228, 228)'
    },
    sidebarMenu: {

    }
};

function mapStateToProps(state) {
    return ({
        showUserMenuValue: state.toggleUserMenu
    });
}

export default connect(mapStateToProps)(RightUserSidebar);