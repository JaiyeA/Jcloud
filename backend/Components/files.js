import React from 'react';
import '../css/files.css';
import Cloud from '../images/cloud.jpg';
import {logOut} from './Auth';

class Files extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    //fetch files
  }

  logout() {
    // delete the jwt??
    logOut();
    document.getElementById("logout-form").action = "/";
  }

  render() {
    return(
      <div>
        <title>My Files</title>
        <div className="Nav">
          <img src={Cloud} className='cloud' alt=" "></img>
          <form id="logout-form"><button type="submit" className="sign-out" onClick={this.logout}>Sign Out</button></form>
        </div>
        <div className="content">
          <div className="path">
            <button>Home</button>
          </div>
          <div className="file-list">
  
          </div>
        </div>
      </div>
    );
  }
}
  
export default Files;  