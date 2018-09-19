import { combineReducers } from 'redux';
import { parseReducer } from 'react-parse';
import UsersReducer from './UsersReducer';

export default combineReducers({
    users: UsersReducer,
    parseReducer
});