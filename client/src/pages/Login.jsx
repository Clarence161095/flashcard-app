import React from 'react';
import '../sass/style.css';

function Login() {
  return (
    <div className="loginCmp">
      <div className="loginCmp-form">
        <div className="loginCmp-form-title">Login</div>
        <input className="loginCmp-form-input" type="text" />
        <input className="loginCmp-form-input" type="password" />
        <div className="loginCmp-form-btnGroup">
          <button className="loginCmp-form-btnGroup-login">Login</button>
          <button className="loginCmp-form-btnGroup-register">Register</button>{' '}
        </div>
      </div>
    </div>
  );
}

export default Login;
