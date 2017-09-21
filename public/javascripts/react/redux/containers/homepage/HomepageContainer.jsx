import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import LeftURLSidebar from '../../../components/homepage/LeftURLSidebar';
import RightUserSidebar from '../usersPart/RightUserSidebar';
import Content from '../../../components/homepage/Content';
import Header from '../../../components/header/Header';
import SwipeableViews from 'react-swipeable-views';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';
import {Observable} from 'rxjs';
import $ from 'jquery';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            swipeable: true
        };
        this.handleSwipe = this.handleSwipe.bind(this);
    }

    componentDidMount(){
        if(this.props.history.location.pathname == '/'){
            Observable.fromEvent(window, 'resize').subscribe((observer)=>{
                if($(document).innerWidth() >= 576 && this.state.swipeable){
                    this.props.swipePage(0);
                    this.setState({
                        swipeable: false
                    });
                }
                else if(!this.state.swipeable){
                    this.setState({
                        swipeable: true
                    });
                }
            });

            if($(document).innerWidth() >= 576 && this.state.swipeable){
                this.setState({
                    swipeable: false
                });
            }
        }

        $(window).on("navigate", function (event, data) {
            var direction = data.state.direction;
            if (direction == 'back') {
                console.info("back");
            }
            if (direction == 'forward') {
                // do something else
            }
        });
    }

    handleSwipe(index){
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
                      onChangeIndex={this.handleSwipe}
                      disabled={(this.state.swipeable) ? false : true}
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

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Homepage));