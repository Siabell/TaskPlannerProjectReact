import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login.js';
import {SignUp} from './components/SignUp.js';
import {DrawerF} from './components/DrawerF.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LoginView = () => (
  <div>
     <Login/>
  </div>
);

const HomeView = () => (
  <div>
     <DrawerF />
  </div>
);

const SignUpView = () => (
  <div>
     <SignUp />
  </div>
);


function App() {
  return (
    <Router>
        <div>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/index" component={HomeView} />
          <Route exact path="/signUp" component={SignUpView} />
        </Switch>         
        </div>
      </Router>
  );
}

export default App;
