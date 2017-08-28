import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import '../../../../../stylesheets/less/urlForm.less';

class URLFormContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="formWrapper" style={style.formWrapper}>
                <form style={style.form}>
                    <input type="text" ref="url" placeholder="Insert URL" style={style.input} />
                </form>
            </div>
        )
    }
}

var style = {
    formWrapper:{
        padding: '10px 18px',
        height: 40,
        display: 'flex',
        alignItems: 'center'
    },
    form:{
        width: '100%'
    },
    input:{
        width: '100%',
        borderRadius: 3,
        height: 35,
        border: '1px solid rgba(0,96,100,0.3)',
        outline: 'none',
        boxSizing: 'border-box',
        paddingLeft: 10,
        fontSize: 14
    }
}

export default URLFormContainer;