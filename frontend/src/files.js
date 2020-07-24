import React from 'react';
import './css/files.css';
import Cloud from './images/cloud.jpg';

//handle sign out submit

//component did mount here (handle file listing)
function Home(props){
    return(
      <div>
        <title>Demo</title>
        <div className="Nav">
          <img src={Cloud} className='cloud' alt=" "></img>
          <form ><button type="submit" className="sign-out">Sign Out</button></form>
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
  
  export default Home;
  