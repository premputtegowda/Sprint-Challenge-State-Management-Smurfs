import React from 'react';

import { connect } from 'react-redux'



const SmurfList = () => {
    return (
        <div>
            Hello I am smurf
        </div>
    )
}

const mapPropsToState = (state) => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapPropsToState, {})(SmurfList);