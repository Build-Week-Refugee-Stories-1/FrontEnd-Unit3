import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import Admin from "./components/Admin";
import Home from './components/Home';


function App() {

  return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/portal' component={Admin} />
      </Router>
  );
}

export default App;
