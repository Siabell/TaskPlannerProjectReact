import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './components/Login.js';
import {SignUp} from './components/SignUp.js';
import {DrawerF} from './components/DrawerF.js';
import {CardAdd} from './components/CardAdd.js';
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

const AddTaskView = () => (
  <div>
     <CardAdd />
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
          <Route exact path="/addTask" component={AddTaskView} />
        </Switch>         
        </div>
      </Router>
  );
}

export default App;
