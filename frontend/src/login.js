import React from 'react';
import './App.css';
import './css/style.css';
import Logo from './images/logo.jpg';
import Eye from './images/eye-button.png';

const eye = <img alt="eye" src={Eye}></img>

function showPassword(){
  var pass = document.getElementById('password');
  if(pass.type == "password")
    pass.type = "text";
  else
    pass.type = "password";
  return pass
}

function Login() {
  return (
    <div>
      <a href="/demo">See a Demo</a>
      <div className="wrapper">
        <title>Login</title>
        <div className="sign-in">
          <img src={Logo} alt="Logo"></img>
          <form className="sign-in-box" method="post" action="/">
            <input className="user" type="text" id='username' name="username" placeholder="Username"></input>
            <input className="pass" type="password" id="password" name="password" placeholder="Password"></input>
            <button className="eye-button" type="button" onClick={showPassword}>{eye}</button>
            <button type="submit" className="login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
