import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './login';
import Demo from './demo';
import Home from './files';

function App() {
  return (
    //fetch session token if user's credentials are correct
    <Router>
      <Switch>
        <Route path='/demo'>
          <Demo />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )}

  export default App;
