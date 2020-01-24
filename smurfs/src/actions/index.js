import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';

export const PUSHING_ACTIVITY_START = 'PUSHING_ACTIVITY_START';
export const PUSHING_ACTIVITY_SUCCESS = 'PUSHING_ACTIVITY_SUCCESS';
export const PUSHING_ACTIVITY_FAILURE = 'PUSHING_ACTIVITY_FAILURE';


export const fetchSmurfs = () => dispatch => {
    dispatch({type:FETCHING_ACTIVITY_START  });
    axios.get('http://localhost:3333/smurfs')
    .then(res=> dispatch({type: FETCHING_ACTIVITY_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCHING_ACTIVITY_FAILURE, payload: err}))
}

export const pushSmurfs = (values) => dispatch => {
    dispatch({type:PUSHING_ACTIVITY_START  });
    axios.post('http://localhost:3333/smurfs',values)
    .then(res=> 
        // dispatch({type: PUSHING_ACTIVITY_SUCCESS, payload: val})
        console.log(res)
        )
    .catch(err => 
        // dispatch({type: PUSHING_ACTIVITY_FAILURE, payload: err})
        console.log(err)
        )
}