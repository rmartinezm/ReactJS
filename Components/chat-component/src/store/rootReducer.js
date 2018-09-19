import { combineReducers } from 'redux';
import user from '../reducers/userReducer';
import { parseReducer } from 'react-parse';

const rootReducer = combineReducers({
    user,
    parseReducer
});

export default rootReducer;