import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import {teal50} from 'material-ui/styles/colors';
import URLFormContainer from '../URLForm/URLFormContainer';
import SingleListItem from './SingleListItem';
import ListURLContainer from './ListURLContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {showLeftSidebar} from '../../actions/index';
import PropTypes from 'prop-types';

class MobileListURLDrawer extends Component{
    constructor(props){
        super(props);
        this.state = {
            scrollable: false
        };
        this.checkHeight = this.checkHeight.bind(this);
    }

    componentDidMount(){
        this.x = window.matchMedia("(max-height: 525px)");
        this.checkHeight(this.x);
        this.x.addListener(this.checkHeight);
    }

    componentWillUnmount(){
        this.x.removeListener(this.checkHeight);
    }

    checkHeight(x){
        if (x.matches && !this.state.scrollable) {
            this.setState({
                scrollable: true
            });
        } else {
            this.setState({
                scrollable: false
            });
        }
    }

    render(){
        return(
            <Drawer
                docked={false}
                width={300}
                open={this.props.leftSidebarVisibility}
                onRequestChange={(open) => {
                    this.props.showLeftSidebar(open)
                }}
                containerStyle={Object.assign(
                    {},
                    style.drawerContainer,
                    {
                        overflowY: (this.state.scrollable) ? 'scroll' : 'hidden'
                    })}
                overlayStyle={{zIndex:899}}
            >
                <URLFormContainer {...this.props} />
                {
                    (this.props.activeRoomState) && <SingleListItem {...this.props} title="Active Room" />
                }
                <ListURLContainer {...this.props} />
            </Drawer>
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
        paddingTop: 88,
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