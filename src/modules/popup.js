import {handleActions} from 'redux-actions';
import axios from 'axios';

const GET_POST_PENDING_POPUP = 'GET_POST_PENDING_POPUP';
const GET_POST_SUCCESS_POPUP = 'GET_POST_SUCCESS_POPUP';
const GET_POST_FAILURE_POPUP = 'GET_POST_FAILURE_POPUP';

export const getAll = () => (dispatch) => {
    dispatch({type: GET_POST_PENDING_POPUP});

    return axios.get('/data/popup.json').then(
        (response) => {
            dispatch({
                type: GET_POST_SUCCESS_POPUP,
                payload: response
            });
        }
    ).catch((error) => {
        dispatch({
            type: GET_POST_FAILURE_POPUP,
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
    [GET_POST_PENDING_POPUP]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_POST_SUCCESS_POPUP]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload.data
        };
    },
    [GET_POST_FAILURE_POPUP]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        };
    }
}, initialState);