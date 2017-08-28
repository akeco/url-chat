import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FileUpload from 'material-ui/svg-icons/file/file-upload';

class DataContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleTouchTap(){
        this.setState({
            open: true,
        });
    }

    handleRequestClose(){
        this.setState({
            open: false,
        });
    }


    render(){
        return(
            <div>
                <form>
                    <RaisedButton
                        onTouchTap={this.handleTouchTap}
                        label="Send File"
                        containerElement="label"
                        primary={true}
                        icon={<FileUpload />}
                        >
                        <input type="file" style={exampleImageInput} />
                    </RaisedButton>
                </form>
            </div>
        )
    }
}

export default DataContainer;

var exampleImageInput = {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
};