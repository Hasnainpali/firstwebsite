import { SET_PRODUCT, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "../Action";

const initialState = {
    products:[ ]
};

export const ProductsReducers = (state = initialState, action) => {
   switch(action.type){
     case SET_PRODUCT:
        return{
            ...state,
            products:action.payload
        }
        default:
         return state
   }
};

export const SelectedProductReducer = (state = {}, action) =>{
   switch(action.type){
    case SELECTED_PRODUCT:
        return{
           ...state,
           ...action.payload
        }
    case REMOVE_SELECTED_PRODUCT:
         return{}
        default:
            return state

   }
};
