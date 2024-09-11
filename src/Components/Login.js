import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_MESSAGES, login, signup } from './Redux/Action';

import { Data } from './Context/SigninSignupContext';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {setNavFooter} = useContext(Data)

  useEffect(() => {
    console.log('Auth Success:', auth.success);
    console.log('Is Login:', isLogin);
   
  
    if (auth.success && isLogin) {
      setNavFooter(true)
      setTimeout(() => {
        window.location.href = '/'
        // navigate("/")
      }, 3000); // Wait for 3 seconds before redirecting
    }
  
    // If signup is successful, switch to the login view
    if (auth.success && !isLogin) {
      setIsLogin(true);
    }
  
    if (auth.success || auth.error) {
      const timer = setTimeout(() => {
        dispatch({ type: CLEAR_MESSAGES });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [auth.success, isLogin, auth.error, dispatch, setNavFooter]);
  

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // Signup flow
      dispatch(signup({ name, email, password, confirmPassword }));
    } else {
      // Login flow
      dispatch(login({ email, password }));  
    }
  };

  return (
    <div className="containers">
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLogin ? 'login' : 'signup'}`}>
            {isLogin ? 'Login Form' : 'Signup Form'}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLogin}
              onChange={() => setIsLogin(true)}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin}
              onChange={() => setIsLogin(false)}
            />
            <label
              htmlFor="login"
              className={`slide login ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className={`slide signup ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </label>
            <div className="slide-tab" style={{ left: isLogin ? '0%' : '50%' }}></div>
          </div>
          <div className="form-inner">
            {isLogin ? (
              <form className="login" onSubmit={handleSubmit}>
                <div className="field">
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="pass-link">
                  <a href="/">Forgot Password</a>
                </div>
                <div className="field">
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                 <a href="/">Go to HomePage</a>
                </div>
              </form>
            ) : (
              <form className="signup" onSubmit={handleSubmit}>
                <div className="field">
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <div className="field">
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
        {auth.success && <p className="text-green-600">{auth.success}</p>}
        {auth.error && <p className="text-red-600">{auth.error}</p>}
      </div>
    </div>
  );
}

export default LoginSignup;
