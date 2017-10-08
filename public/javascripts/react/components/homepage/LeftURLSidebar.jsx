import React, {Component} from 'react';
import {teal50} from 'material-ui/styles/colors';
import URLFormContainer from '../../redux/containers/URLForm/URLFormContainer';
import ListURLContainer from '../../redux/containers/URLlist/ListURLContainer';
import SingleListItem from '../../redux/containers/URLlist/SingleListItem';
import UserFormContainer from '../../redux/containers/userForm/UserFormContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

class LeftURLSidebar extends Component{
    constructor(props){
        super(props);
        this.showSingleItem = this.showSingleItem.bind(this);
    }

    showSingleItem(){
        var title = (this.props.tab) ? 'Active private room' : 'Active Room';
        if(this.props.activeRoomState) return <SingleListItem title={title} {...this.props} />
    }

    render(){
        var leftSidebarVisibility = (!this.props.leftSidebarVisibility) ? 'hideLeftSidebar leftSidebar' : 'leftSidebar';
        return(
            <div className={leftSidebarVisibility} style={style.wrapper}>
                {
                    (this.props.tab) ? <UserFormContainer/> : <URLFormContainer/>
                }
                {
                    this.showSingleItem()
                }
                    <ListURLContainer {...this.props}/>
            </div>
        );
    }
}

LeftURLSidebar.propTypes = {
    tab: PropTypes.number.isRequired
};

var style = {
    wrapper: {
        minWidth: 300,
        backgroundColor: teal50
    }
};

function mapStateToProps(state) {
    return ({
        activeRoomState: state.activeRoom,
        leftSidebarVisibility: state.leftSidebarVisibility,
        privateRoom: state.privateRoom
    });
}

export default connect(mapStateToProps)(LeftURLSidebar);