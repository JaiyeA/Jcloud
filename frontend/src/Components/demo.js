import React from 'react';
import '../css/files.css';
import Cloud from '../images/cloud.jpg';



function Main(){
  return(
    <div>
      <title>Demo</title>
      <div className="Nav">
        <img src={Cloud} className='cloud' alt=" "></img>
        <form method="get"><button type="submit" className="sign-out" formAction="/">Sign In</button></form>
      </div>
      <div className="content">
        <div className="path">
          <button>Home</button>
        </div>
        <div className="file-list">

        </div>
      </div>
    </div>
  )
}

export default Main;
