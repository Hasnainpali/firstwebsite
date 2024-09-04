import AuthReducer from './authReducers';
import { combineReducers } from 'redux';

const  rootReducers = combineReducers({
     auth: AuthReducer
});

export default rootReducers;