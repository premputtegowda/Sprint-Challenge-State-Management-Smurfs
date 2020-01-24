import React, {useEffect} from 'react';
import SmurfForm from './SmurfForm'
import Smurf from './Smurf'

import { connect } from 'react-redux'

import { fetchSmurfs, pushSmurfs} from '../actions';



const SmurfList = (props) => {
    console.log(props.smurfs)
    const fetchSmurf = () => props.fetchSmurfs();
    
    useEffect(fetchSmurf, [])
    return (
        
        <div className="smurf-list">
            <SmurfForm pushSmurfs={props.pushSmurfs}/>
           {/* <button onClick={props.fetchSmurfs}>Get Smurfs!</button> */}
            {props.smurfs ? 

            <div className="smurf-list">
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