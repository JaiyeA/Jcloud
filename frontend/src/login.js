import React from 'react';
import './App.css';
import './css/style.css';
import Logo from './images/logo.jpg';
import Eye from './images/eye-button.png';
import Files from './files';

function showPassword(){
  const pass = document.getElementById('password');
  if(pass.type === "password")
    pass.type = "text";
  else
    pass.type = "password";
  return pass
}

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {user: "", pass: "", isLoggedIn: false};
    this.handleUChange = this.handleUChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }
  
  loginCheck() { //Login component should only handle login and not user auth
    //check for the token
    //if token exist, then isloggedin is true
    if (!this.isLoggedIn) {
      this.setState({isLoggedIn: true});
    }
  }

  handleUChange(event) {
    this.setState({user: event.target.value});
  }

  handlePChange(event) {
    this.setState({pass: event.target.value})
  }

  handleSubmit(event){
    const user = this.state.user;
    const pass = this.state.pass;
    // if the credentials are correct, then I get a token
    this.loginCheck();
    event.preventDefault();
  }

  render() {
    const eye = <img alt="eye" src={Eye}></img>;
    return (this.state.isLoggedIn ? <Files /> : //don't render the files page here!
      <div>
        <a href="/demo">See a Demo</a>
        <div className="wrapper">
          <title>Login</title>
          <div className="sign-in">
            <img src={Logo} alt="Logo"></img>
            <form className="sign-in-box" onSubmit={this.handleSubmit}>
              <input className="user" type="text" id='username' name="username" placeholder="Username" value={this.state.user} onChange={this.handleUChange}></input>
              <input className="pass" type="password" id="password" name="password" placeholder="Password" value={this.state.pass} onChange={this.handlePChange}></input>
              <button className="eye-button" type="button" onClick={showPassword}>{eye}</button>
              <button type="submit" className="login">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;