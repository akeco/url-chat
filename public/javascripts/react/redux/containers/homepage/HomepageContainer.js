import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import LeftURLSidebar from '../../../components/homepage/LeftURLSidebar';
import Content from '../../../components/homepage/Content';
import Header from '../../../components/header/Header';
import {teal500, lime200} from 'material-ui/styles/colors';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'material-ui/Tabs';
import MobileListURLDrawer from '../URLlist/MobileListURLDrawer';
import Media from 'react-media'
import { Dimmer, Loader } from 'semantic-ui-react'
import {setCurrentTab, showLeftSidebar} from '../../actions/index';

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showMessageLoader: false
        };
        this.changeMessageLoaderState = this.changeMessageLoaderState.bind(this);
    }

    changeMessageLoaderState(value){
        this.setState({
            showMessageLoader: value
        });
    }

    render(){
        var {currentTab, privateNotifyCollection, showLeftSidebar, spinner} = this.props;
        var hasUnreadMessagesClass = (privateNotifyCollection.length) ? 'hasUnreadMessagesClass' : '';
        return(
          <Dimmer.Dimmable dimmed={spinner} style={style.outerDiv}>
              <Dimmer active={spinner} inverted >
                  <div>
                      <Loader indeterminate size='large'>Please wait...</Loader>
                  </div>
              </Dimmer>

              <Header/>
              <Tabs
                  className="tabsBlock"
                  tabItemContainerStyle={{backgroundColor: teal500}}
                  inkBarStyle={{backgroundColor: lime200}}
                  style={{height: '100%'}}
                  value={currentTab}
                  onChange={(currentTab)=>{
                      this.props.setCurrentTab(currentTab);
                  }}
              >
                  <Tab value={0} label="Url rooms & messages" buttonStyle={{fontSize: 12}}>
                      <div className="tab" style={style.tab}>
                          {
                              (!currentTab) && (
                                  <Media query="(max-width: 647px)" render={() => (
                                      <MobileListURLDrawer
                                        tab={currentTab}
                                        changeMessageLoaderState={this.changeMessageLoaderState}
                                      />
                                  )}/>
                              )
                          }
                          <LeftURLSidebar
                              tab={currentTab}
                              changeMessageLoaderState={this.changeMessageLoaderState}
                          />
                          <Content
                              currentTab={currentTab}
                              tab={0}
                              showMessageLoader={this.state.showMessageLoader}
                          />
                      </div>
                  </Tab>
                  <Tab
                      className={hasUnreadMessagesClass}
                      value={1}
                      label="Private messages"
                      buttonStyle={{fontSize: 12}}
                      onActive={()=>{
                          if(privateNotifyCollection.length){
                              showLeftSidebar(true);
                          }
                      }}
                  >
                      <div className="tab" style={style.tab}>
                          {
                              (currentTab) && (
                                  <Media query="(max-width: 647px)" render={() => (
                                      <MobileListURLDrawer
                                          tab={currentTab}
                                          changeMessageLoaderState={this.changeMessageLoaderState}
                                      />
                                  )}/>
                              )
                          }
                          <LeftURLSidebar
                              tab={currentTab}
                              changeMessageLoaderState={this.changeMessageLoaderState}
                          />
                          <Content
                              currentTab={currentTab}
                              tab={1}
                              changeMessageLoaderState={this.changeMessageLoaderState}
                          />
                      </div>
                  </Tab>
              </Tabs>
          </Dimmer.Dimmable>
        );
    }
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCurrentTab,
        showLeftSidebar
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        rooms: state.rooms,
        currentTab: state.currentTab,
        privateNotifyCollection: state.privateNotifyCollection,
        spinner: state.spinner
    });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));