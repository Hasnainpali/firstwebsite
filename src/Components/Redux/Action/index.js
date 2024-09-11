import axios from "axios";

// Action types
export const SIGNUP_SUCCESS = "signup_success";
export const SIGNUP_FAILURE = "signup_failure";
export const LOGIN_SUCCESS = "login_success";
export const LOGIN_FAILURE = "login_failure";
export const CLEAR_MESSAGES = "clear_message"
export const LOGOUT = "logout";

// Signup action
export const signup = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://firstwebsite-psi.vercel.app/api/user/signup', userData);
    if (response && response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.user))
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
        success: "Signup successful! You can now log in.",
      });
    }
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response.msg,
    });
  }
};

// Login action
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('https://firstwebsite-psi.vercel.app/api/user/signin', userData);
    if (response && response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.user))
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
        success: "Login successful! Welcome back.",
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.msg,
      error:"invalid email or passowrd"
    });
  }
};

// Logout action
export const logout = () => (dispatch) => {
  localStorage.removeItem('user');
  dispatch({
    type: LOGOUT,
  });
};
//clearMessage//
export const clearMessages = () => ({
    type: CLEAR_MESSAGES,
  });
