import React from 'react';
import '../css/style.css';
import Logo from '../images/logo.jpg';
import Eye from '../images/eye-button.png';
import axios from 'axios';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: "", password: "", isAuthorized: null};
    this.showPassword = this.showPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  showPassword() {
    const pass = document.getElementById('password');
    if(pass.type === "password")
      pass.type = "text";
    else
      pass.type = "password";
    return pass
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount(){
    //check if user is already logged in
    axios.get('/auth-check',{})
    .then((res)=>{
      const response = res.data.authenticated;
      if(response){
        this.setState({isAuthorized: true});
      }else{
        this.setState({isAuthorized: false});
      }
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const user = this.state.username;
    const pass = this.state.password;
    axios.post('/',{
      username: user,
      password: pass
    })
    .then((res)=>{
      const response = res.data.authenticated;
      if(response){
        //if the credentials are correct, then I get a jwt
        this.setState({isAuthorized: true});
      } else{
        const notify = document.getElementById('notify');
        notify.style.display = 'block';
      }
    })
  }

  render() {
    const eye = <img alt="eye" src={Eye}></img>;
    const loginPage = (
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
    
    if(this.state.isAuthorized === null)
      return <title>please wait...</title>
    else if(this.state.isAuthorized === false)
      return loginPage
    else
      return this.props.redirect
  }
}

export default Login;