import React from 'react';
import './css/files.css';
import Cloud from './images/cloud.jpg';

function Main(){
  return(
    <div>
      <title>Files</title>
      <div className="Nav">
        <img src={Cloud} className='cloud'></img>
        <input type="button" className="sign-out" value="Sign Out"></input>
      </div>
      <div className="content">
        <div className="path">
          <h3>path</h3>
        </div>
        <div className="file-list">

        </div>
      </div>
    </div>
  )
}

export default Main;
