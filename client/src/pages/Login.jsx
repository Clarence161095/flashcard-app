import LoginApi from 'api/LoginApi';
import React, { useState } from 'react';
import '../sass/style.css';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (checkDisabledButton()) {
      LoginApi.login(userName, password)
        .then((result) => {
          localStorage.setItem('accessToken', result.data.accessToken);
          window.location.reload('/');
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setErrorMessage('Sai tên đăng nhập hoặc mật khẩu!');
          }
        });
    }
  };

  const checkValidateUser = () => {
    if (userName === '') {
      return '';
    }
    if (!/^[a-z0-9_-]{3,36}$/.test(userName)) return 'Tên đăng nhập từ 3-36 ký tự';
    return '';
  };

  const checkValidatePassword = () => {
    if (password === '') {
      return '';
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password))
      return 'Mật khẩu ít nhất phải có 6 ký tự và chứa ký tự in hoa.';
    return '';
  };

  const checkDisabledButton = () => {
    return (
      checkValidateUser() === '' &&
      checkValidatePassword() === '' &&
      userName !== '' &&
      password !== ''
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="loginCmp">
      <div className="loginCmp_form">
        <div className="loginCmp_form_title">Đăng nhập</div>
        <input
          className="loginCmp_form_input"
          type="text"
          alt="username"
          placeholder="Tên đăng nhập"
          value={userName}
          onKeyDown={handleKeyDown}
          onChange={(e) => setUserName(e.target.value)}
        />
        <span>{checkValidateUser()}</span>
        <input
          className="loginCmp_form_password"
          type="password"
          alt="password"
          placeholder="Mật khẩu"
          value={password}
          onKeyDown={handleKeyDown}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{checkValidatePassword()}</span>
        <div className="loginCmp_form_btnGroup">
          <button
            className="loginCmp_form_btnGroup_login"
            disabled={!checkDisabledButton()}
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          <button className="loginCmp_form_btnGroup_register">Đăng ký</button>{' '}
        </div>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
}

export default Login;
