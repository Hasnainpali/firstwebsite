import AuthReducer from './authReducers';
import { combineReducers } from 'redux';
import { ProductsReducers, SelectedProductReducer } from './productReducers';


const  rootReducers = combineReducers({
     auth:AuthReducer,
     allProduct:ProductsReducers,
     product:SelectedProductReducer
});

export default rootReducers;