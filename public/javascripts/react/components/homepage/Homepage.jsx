import React, {Component} from 'react';
import LeftURLSidebar from './LeftURLSidebar';
import RightUserSidebar from './RightUserSidebar';
import Content from './Content';
import Header from '../header/Header';

class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div style={style.outerDiv}>
              <Header/>
              <div className="homepageWrapper" style={style.homepageWrapper}>
                  <LeftURLSidebar/>
                  <Content/>
                  <RightUserSidebar/>
              </div>
          </div>
        );
    }
}

export default Homepage;

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