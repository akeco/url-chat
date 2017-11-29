import { Dimmer, Loader } from 'semantic-ui-react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const DimmerHoC = (Component) => {
    return (
        <Dimmer.Dimmable dimmed={spinner} style={style.outerDiv}>
            <Dimmer active={spinner} inverted >
                <div>
                    <Loader indeterminate size='large'>Please wait...</Loader>
                </div>
                <Component/>
            </Dimmer>
        </Dimmer.Dimmable>
    )
};

function mapStateToProps(state) {
    return ({
        spinner: state.spinner
    });
}

export default connect(mapStateToProps)(DimmerHoC);