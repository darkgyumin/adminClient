import {handleActions} from 'redux-actions';
import axios from 'axios';

const GET_POST_PENDING_POPUP = 'GET_POST_PENDING_POPUP';
const GET_POST_SUCCESS_POPUP = 'GET_POST_SUCCESS_POPUP';
const GET_POST_FAILURE_POPUP = 'GET_POST_FAILURE_POPUP';

const CHANGE_PAGE_POPUP = 'CHANGE_PAGE_POPUP';
const CHANGE_SEARCH_POPUP = 'CHANGE_SEARCH_POPUP';

export const changePage = (page) => (dispatch) => {
    dispatch({
        type: CHANGE_PAGE_POPUP,
        page: page
    })
}

export const changeSearch = ({searchKey, searchWord}) => (dispatch) => {
    dispatch({
        type: CHANGE_SEARCH_POPUP,
        page: '1',
        searchKey: searchKey,
        searchWord: searchWord
    })
}


//리스트 데이터 가져오기
export const getAll = (params) => (dispatch) => {
    dispatch({type: GET_POST_PENDING_POPUP});

    ///data/popup.json
    return axios({
        method: 'get',
        url : 'http://localhost/public/index.php/popup',
        params: params
    })
    .then(
        (response) => {
            dispatch({
                type: GET_POST_SUCCESS_POPUP,
                payload: response
            })
        }
    ).catch((error) => {
        dispatch({
            type: GET_POST_FAILURE_POPUP,
            payload: error
        })
    })
}

//insert
export const postData = (params) => (dispatch) => {
    return axios({
        method: 'post',
        url : 'http://localhost/public/index.php/popup',
        data: params
    })
    .then(
        (response) => {
            dispatch({
                type: GET_POST_SUCCESS_POPUP,
                payload: response
            })
        }
    ).catch((error) => {
        dispatch({
            type: GET_POST_FAILURE_POPUP,
            payload: error
        })
    })
}

const initialState = {
    pending: false,
    error: false,
    data: [],
    page: '1',
    searchKey : '',
    searchWord : ''
}

export default handleActions({
    [CHANGE_PAGE_POPUP]: (state, action) => {
        return {
            ...state,
            page: action.page
        }
    },
    [CHANGE_SEARCH_POPUP]: (state, action) => {
        return {
            ...state,
            page: action.page,
            searchKey: action.searchKey,
            searchWord: action.searchWord
        }
    },
    [GET_POST_PENDING_POPUP]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        }
    },
    [GET_POST_SUCCESS_POPUP]: (state, action) => {
        return {
            ...state,
            pending: false,
            data: action.payload.data
        }
    },
    [GET_POST_FAILURE_POPUP]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);