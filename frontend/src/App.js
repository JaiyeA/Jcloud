import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from './Components/login';
import Demo from './Components/demo';
import Files from './Components/files';
import {AuthCheck} from './Components/Auth';

function App() {
  return (
    //fetch session token if user's credentials are correct
    <Router>
      <Switch>
        <Route path='/demo' component={Demo} />
        <Route path='/my-files'>
          <AuthCheck protectedResource={<Files />} redirect={<Redirect to='/' />} />
        </Route>
        <Route path='/'>
          <Login redirect={<Redirect to='/my-files' />} />
        </Route>
      </Switch>
    </Router>
  )}

  export default App;
