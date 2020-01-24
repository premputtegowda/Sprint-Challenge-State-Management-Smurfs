import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';


export const fetchActivity = () => dispatch => {
    dispatch({type:FETCHING_ACTIVITY_START  });
    axios.get('http://localhost:3333/smurfs')
    .then(res=> console.log(res))
    .catch(err => console.log(err))
}