import React from 'react';

import { connect } from 'react-redux'

import { fetchActivity } from '../actions';



const SmurfList = (props) => {
    return (
        <div>
           <button onClick={props.fetchActivity}>Get Smurfs!</button>
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

export default connect(mapPropsToState, { fetchActivity })(SmurfList);