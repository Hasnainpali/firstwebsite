import { createStore , applyMiddleware } from "redux";
import rootReducers from '../src/Components/Redux/Reducers/index';
import { thunk } from "redux-thunk";

const Store = createStore(rootReducers, applyMiddleware(thunk))

export default Store;