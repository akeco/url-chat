import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import LeftURLSidebar from '../../../components/homepage/LeftURLSidebar';
import RightUserSidebar from '../usersPart/RightUserSidebar';
import Content from '../../../components/homepage/Content';
import Header from '../../../components/header/Header';
import {teal500, lime200} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {swipePage} from '../../actions/index';
import {Observable} from 'rxjs';
import $ from 'jquery';
import {Tabs, Tab} from 'material-ui/Tabs';
import MobileListURLDrawer from '../URLlist/MobileListURLDrawer';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            swipeable: true,
            currentTab: 0
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
              <Tabs
                  className="tabsBlock"
                  tabItemContainerStyle={{backgroundColor: teal500}}
                  inkBarStyle={{backgroundColor: lime200}}
                  style={{height: '100%'}}
                  value={this.state.currentTab}
                  onChange={(currentTab)=>{
                      this.setState({
                          currentTab
                      });
                  }}
              >
                  <Tab value={0} label="Url rooms & messages" buttonStyle={{fontSize: 12}}>
                      <div className="tab" style={style.tab}>
                          <MobileListURLDrawer tab={this.state.currentTab} />
                          <LeftURLSidebar tab={this.state.currentTab} />
                          <Content tab={this.state.currentTab} />
                      </div>
                  </Tab>
                  <Tab value={1} label="Private messages" buttonStyle={{fontSize: 12}}>
                      <div className="tab" style={style.tab}>
                          <MobileListURLDrawer tab={this.state.currentTab} />
                          <LeftURLSidebar tab={this.state.currentTab} />
                          <Content tab={this.state.currentTab} />
                      </div>
                  </Tab>
              </Tabs>
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
    },
    tab: {
        display: 'flex'
    }
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Homepage));