import {handleActions} from 'redux-actions';
import axios from 'axios';

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getAll = () => (dispatch) => {
    dispatch({type: GET_POST_PENDING});

    return axios.get('/data/sidebar.json').then(
        (response) => {
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response
            });    
        }
    ).catch((error) => {
        dispatch({
            type: GET_POST_FAILURE,
            payload: error
        });
    });
}

const initialState = {
    pending: false,
    error: false,
    data: []
}

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_POST_SUCCESS]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload.data
        };
    },
    [GET_POST_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        };
    },
}, initialState);