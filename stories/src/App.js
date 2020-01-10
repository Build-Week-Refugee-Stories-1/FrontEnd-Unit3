import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Stories from "./components/Stories";
import SubmitStories from "./components/SubmitStories";
import Navigation from "./components/Navigation";
import Carousel from "./components/StoriesCarousel";
import HomePage from "./components/HomePage";
import SingleStory from "./components/SingleStory";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1 className="header">Refugee Stories</h1>
          <div className="nav-links">
            <Navigation />
          </div>
        </nav>
        <div className="routes">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/stories" component={Stories} />
          <Route path="/story/:id" component={SingleStory} />
          <Route exact path="/login" component={Login} />
          <Route path="/submit" component={SubmitStories} />
          <PrivateRoute exact path="/carousel-stories" component={Carousel} />
        </div>
      </div>
    </Router>
  );
}

export default App;
