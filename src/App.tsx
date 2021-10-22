import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <> 
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
