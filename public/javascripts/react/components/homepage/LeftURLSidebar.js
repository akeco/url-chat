import React, {Component} from 'react';
import {teal50} from 'material-ui/styles/colors';
import URLFormContainer from '../../redux/containers/URLForm/URLFormContainer';
import ListURLContainer from '../../redux/containers/URLlist/ListURLContainer';
import SingleListItem from '../../redux/containers/URLlist/SingleListItem';
import UserFormContainer from '../../redux/containers/userForm/UserFormContainer';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class LeftURLSidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterVal: '',
            scrollable: false
        };
        this.showSingleItem = this.showSingleItem.bind(this);
        this.changeFilterVal = this.changeFilterVal.bind(this);
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

    showSingleItem(){
        var title = (this.props.tab) ? 'Active private room' : 'Active Room';
        if(this.props.activeRoomState) return <SingleListItem title={title} {...this.props} />
    }

    changeFilterVal(value){
        this.setState({
            filterVal: value
        })
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
        var leftSidebarVisibility = (!this.props.leftSidebarVisibility) ? 'hideLeftSidebar leftSidebar' : 'leftSidebar';
        return(
            <div
                className={leftSidebarVisibility}
                style={Object.assign(
                    {},
                    style.wrapper,
                    {
                        overflowY: (this.state.scrollable) ? 'scroll' : 'hidden'
                    }
                    )}
            >
                {
                    (this.props.tab)
                        ? <UserFormContainer
                            filterVal={this.state.filterVal}
                            changeFilterVal={this.changeFilterVal} />
                        : <URLFormContainer/>
                }
                {
                    this.showSingleItem()
                }
                    <ListURLContainer filterVal={this.state.filterVal} {...this.props}/>
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