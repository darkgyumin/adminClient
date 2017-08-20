import {combineReducers} from 'redux';
import sidebar from './sidebar';
import popup from './popup';

export default combineReducers({
    sidebar,
    popup
});