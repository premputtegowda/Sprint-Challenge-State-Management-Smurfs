import React from 'react';
import SmurfForm from './SmurfForm'
import Smurf from './Smurf'

import { connect } from 'react-redux'

import { fetchSmurfs, pushSmurfs} from '../actions';



const SmurfList = (props) => {
    console.log(props.smurfs)
    return (
        
        <div>
            <SmurfForm pushSmurfs={props.pushSmurfs}/>
           <button onClick={props.fetchSmurfs}>Get Smurfs!</button>
            {props.smurfs ? 

            <div>
            {
            props.smurfs.map( smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))  

            }
            </div>
            : null
           
            }
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

export default connect(mapPropsToState, { fetchSmurfs, pushSmurfs })(SmurfList);