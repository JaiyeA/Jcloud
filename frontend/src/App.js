import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './login';
import Demo from './demo';

function App() {
  return (
    //check if user's auth token exist
    <Router>
      <Switch>
        <Route path='/demo'>
          <Demo />
        </Route>
        <Route path='/'>
          <Login /> {/* Call a function that returns true or false within a conditional ternary operator*/}
        </Route>
      </Switch>
    </Router>
  )}

  export default App;
