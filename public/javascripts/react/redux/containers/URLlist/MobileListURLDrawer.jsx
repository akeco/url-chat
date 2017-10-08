import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import {teal50} from 'material-ui/styles/colors';
import URLFormContainer from '../URLForm/URLFormContainer';
import SingleListItem from '../URLlist/SingleListItem';
import ListURLContainer from '../URLlist/ListURLContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showLeftSidebar} from '../../actions/index';
import Media from 'react-media'
import PropTypes from 'prop-types';

class MobileListURLDrawer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Media query="(max-width: 647px)" render={() => (
            <Drawer
                docked={false}
                width={300}
                open={this.props.leftSidebarVisibility}
                onRequestChange={(open) => {
                    if(this.props.activeRoomState){
                        this.props.showLeftSidebar(open)
                    }
                }}
                containerStyle={style.drawerContainer}
                overlayStyle={{zIndex:899}}
            >
                <URLFormContainer {...this.props} />
                {
                    (this.props.activeRoomState) && <SingleListItem {...this.props} title="Active Room" />
                }
                <ListURLContainer {...this.props} />
            </Drawer>
        )}/>
        )
    }
}

MobileListURLDrawer.propTypes = {
    tab: PropTypes.number.isRequired
};

const style = {
    drawerContainer: {
        backgroundColor: teal50,
        zIndex: 900,
        paddingTop: 88
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        activeRoomState: state.activeRoom,
        leftSidebarVisibility: state.leftSidebarVisibility
    });
}

export default connect(mapStateToProps, matchDispatchToProps)(MobileListURLDrawer);