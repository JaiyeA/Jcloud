import React from 'react';
import './App.css';
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from './Components/login';
import Demo from './Components/demo';
import Files from './Components/files';
import {AuthCheck} from './Components/Auth';
=======
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './login';
import Demo from './demo';
>>>>>>> 517f56fee8632fdce00a2d8245c7536d7cd4aafe

function App() {
  return (
    //check if user's auth token exist
    <Router>
      <Switch>
        <Route path='/demo' component={Demo} />
        <Route path='/my-files'>
          <AuthCheck protectedResource={<Files />} redirect={<Redirect to='/' />} />
        </Route>
        <Route path='/'>
          <Login /> {/* Call a function that returns true or false within a conditional ternary operator*/}
        </Route>
      </Switch>
    </Router>
  )}

  export default App;
