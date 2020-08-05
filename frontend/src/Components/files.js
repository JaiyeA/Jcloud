import React from 'react';
import '../css/files.css';
import Cloud from '../images/cloud.jpg';

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
    //handle logout
    // delete the jwt
    // history.push('/')
  }

  render() {
    return(
      <div>
        <title>My Files</title>
        <div className="Nav">
          <img src={Cloud} className='cloud' alt=" "></img>
          <form><button type="submit" className="sign-out">Sign Out</button></form>
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