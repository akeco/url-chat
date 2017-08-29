import React, {Component} from 'react';
import {teal900, teal50} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/Navigation/arrow-back';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';
import UserFormContainer from '../userForm/UserFormContainer';
import '../../../../../stylesheets/less/userSidebarMenu.less';

class RightUserSidebar extends Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.swipePage(1);
    }

    render(){
        var toggleMenuStyle = (this.props.showUserMenuValue) ? 300 : 0;
        return(
            <div className="rightUserMenu" style={ Object.assign({
                minWidth: toggleMenuStyle
            }, style.wrapper )}>
                <div style={style.sidebarHeader}>
                    <IconButton
                        style={style.arrowButton}
                        iconStyle={style.icons}
                        onTouchTap={this.goBack}
                        className="messagesBack"
                    >
                        <ArrowBack
                            hoverColor="white"
                        />
                    </IconButton>
                    <UserFormContainer/>
                </div>
            </div>
        );
    }
}

const style = {
    arrowButton: {
      marginLeft: -15
    },
    wrapper: {
        height: '100%',
        width: 0,
        backgroundColor: teal900,
    },
    sidebarHeader: {
        width: '100%',
        height: 60,
        display: 'flex',
        padding: '10px 18px',
        boxSizing: 'border-box',
        alignItems: 'center'
    },
    icons:{
        color: teal50,
    }
};


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        swipePage: swipePage
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex,
        showUserMenuValue: state.toggleUserMenu
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(RightUserSidebar);