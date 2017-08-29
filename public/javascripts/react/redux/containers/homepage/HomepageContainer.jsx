import React, {Component} from 'react';
import LeftURLSidebar from '../../../components/homepage/LeftURLSidebar';
import RightUserSidebar from './RightUserSidebar';
import Content from '../../../components/homepage/Content';
import Header from '../../../components/header/Header';
import SwipeableViews from 'react-swipeable-views';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.handleSwipe = this.handleSwipe.bind(this);
    }

    handleSwipe(index){
        console.info(index);
        this.props.swipePage(index);
    }

    render(){
        return(
          <div style={style.outerDiv}>
              <Header/>
              <div className="homepageWrapper" style={style.homepageWrapper}>
                  <SwipeableViews
                      enableMouseEvents={true}
                      index={this.props.pageIndex}
                      onTransitionEnd={this.handleSwipe}
                  >
                      <LeftURLSidebar/>
                      <Content/>
                      <RightUserSidebar/>
                  </SwipeableViews>
              </div>
          </div>
        );
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        swipePage: swipePage,
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        pageIndex: state.pageIndex
    });
}

var style = {
    outerDiv:{
        width:'100%',
        height:'100%'
    },
    homepageWrapper:{
        width:'100%',
        height:'100%',
        display:'flex'
    }
};

export default connect(mapStateToProps, matchDispatchToProps)(Homepage);