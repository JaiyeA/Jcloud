import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './login';
import Files from './files';

function App() {
  return (
    //if user has login key, serve the files page
    //if not serve the login page
    <Router>
      <Switch>
        <Route path='/files'>
          <Files />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )}
//Create a function for when someone logs in to their account.
//Send a session storage key "Login: hGSH75sdhb8"
export default App;
