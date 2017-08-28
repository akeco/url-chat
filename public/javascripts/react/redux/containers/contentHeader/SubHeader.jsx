import React, {Component} from 'react';

class SubHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <div style={style.outer}>

          </div>
        );
    }
}

var style = {
    outer: {
        height: 48,
        backgroundColor: '#D8D8D8',
        borderBottom: '1px solid #CDC9C9',
        boxSizing: 'border-box'
    }
};

export default SubHeader;