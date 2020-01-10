import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Stories from './components/Stories';
// import { axiosWithAuth } from './axiosWithAuth';
import { PubContext } from './components/contexts/PubStories';
import Carousel from "./components/StoriesCarousel";
import SubmitStories from "./components/SubmitStories";


function App() {
  return (
    <PubContext.Provider >
      <Router>
        {/* <Route path="/login" component={Login} />
        <PrivateRoute exact path='/portal' component={Admin} />
        <Route path='/aboutus' component={AboutUs} /> */}
        <Route path='/stories' component={Stories} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/carousel-stories" component={Carousel} />
        <Route path='/submit' component={SubmitStories} />
      </Router>
    </PubContext.Provider>
  );
}

export default App;
