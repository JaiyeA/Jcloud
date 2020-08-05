import React from 'react';
import '../App.css';
import '../css/style.css';
import Logo from '../images/logo.jpg';
import Eye from '../images/eye-button.png';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", isLoggedIn: false};
    this.showPassword = this.showPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
  }
  
  showPassword() {
    const pass = document.getElementById('password');
    if(pass.type === "password")
      pass.type = "text";
    else
      pass.type = "password";
    return pass
  }

  loginCheck() { //Login component should only handle login and not user auth
    //check for the token
    //if token exist, then isloggedin is true
    if (!this.isLoggedIn) {
      this.setState({isLoggedIn: true});
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const user = this.state.username;
    const pass = this.state.password;
    //create a seperate file to handle sign in and authentication. create an instance of authentication
    // if the credentials are correct, then I get a token

    //if credentials are wrong, then show the notification
    //const notify = document.getElementById('notify');
    //notify.style.display = 'block';
  }

  render() {
    const eye = <img alt="eye" src={Eye}></img>;
    return (
      <div>
        <a href="/demo">See a Demo</a>
        <div className="wrapper">
          <title>Login</title>
          <div className="sign-in">
            <img src={Logo} alt="Logo"></img>
            <form className="sign-in-box" onSubmit={this.handleSubmit}>
              <p id="notify" className="login-notify">Incorrect username and/or password.</p>
              <input className="user" type="text" id='username' name="username" placeholder="Username" value={this.state.user} onChange={this.handleChange}></input>
              <input className="pass" type="password" id="password" name="password" placeholder="Password" value={this.state.pass} onChange={this.handleChange}></input>
              <button className="eye-button" type="button" onClick={this.showPassword}>{eye}</button>
              <button type="submit" className="login">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;