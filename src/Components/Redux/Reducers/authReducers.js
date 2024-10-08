import { SIGNUP_SUCCESS,SIGNUP_FAILURE,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT,CLEAR_MESSAGES} from "../Action";

const storedUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : null ;

const initialValue = {
    user:storedUser,
    error:null,
    success:null,
    isAuth: storedUser ? true : false,
};

const AuthReducer = (state = initialValue, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.payload.user,
                success:action.success,
                isAuth: true
            };
        case SIGNUP_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state,
                error:action.error,
                isAuth: false
            };
        case CLEAR_MESSAGES:
            return{
                ...state,
                success:null,
                error:null
            }
        case LOGOUT:
            return{
                ...state,
                user:null,
                success:null,
                error:null,
                isAuth: false
            }
        default:
            return state;
    }
};

export default AuthReducer;
