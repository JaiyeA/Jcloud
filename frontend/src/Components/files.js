/*****
this is the page with the list of files
*****/

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
    this.state = {number_of_files: 0};
    this.logout = this.logout.bind(this);
    this.upload_button = this.upload_button.bind(this);
    this.upload_box = this.upload_box.bind(this);
    this.exit = this.exit.bind(this);
  }

  componentDidMount() {
    //fetch home files
    fm.get_files("Home");
  }

  logout() {
    logOut();
    document.getElementById("logout-form").action = "/";
  }

  upload_button(){
    var upload_overlay = document.getElementById("Upload-Overlay");
    upload_overlay.style.display = "block";
    var upload_box = document.getElementById("Upload-Box");
    upload_box.style.display = "block";
  
  }

  upload_box(){
    return( 
      <div>
        <div id="Upload-Overlay" className="Upload-Overlay" onClick={this.exit}></div>
        <div id="Upload-Box" className="Upload-Box">
          <input type="file" multiple></input>
        </div>
      </div>
    ) 
  }

  exit(){
    var upload_overlay = document.getElementById("Upload-Overlay");
    upload_overlay.style.display = "none";
    var upload_box = document.getElementById("Upload-Box");
    upload_box.style.display = "none";
  }

  render() {
    return(
      <div>
        <title>My Files</title>
        {this.upload_box()}
        <div className="Nav" id="Navigation-Bar"> 
          <div className="Top-Nav">
            <img src={Cloud} className='cloud' alt=" "></img>
            <form id="logout-form"><button type="submit" className="sign-out" onClick={this.logout}>Sign Out</button></form>
          </div>
          <div className="File-Nav">
            <button type="button" className="Upload-Button" onClick={this.upload_button}>Upload File(s)</button>
          </div>
        </div>
        <div className="content">
          <div className="file-list">
  
          </div>
        </div>
      </div>
    );
  }
}
  
export default Files;  