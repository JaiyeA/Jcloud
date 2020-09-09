import React from 'react';
import '../css/files.css';
import Cloud from '../images/cloud.jpg';
import {logOut} from './Auth';
//import axios from 'axios';
import FileManager from './file-manager';
const fm = new FileManager();

class Files extends React.Component{
  constructor(props){
    super(props)
    this.state = {path: 'Home'};
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    //fetch home files
    fm.get_files(this.state.path)
  }

  logout() {
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
            <h5 id="path">{this.state.path}</h5>
          </div>
          <div className="file-list">
  
          </div>
        </div>
      </div>
    );
  }
}
  
export default Files;  