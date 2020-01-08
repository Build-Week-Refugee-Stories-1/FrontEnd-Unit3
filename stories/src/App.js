import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Stories from './components/Stories';
import { axiosWithAuth } from './axiosWithAuth';
import { PubContext } from './contexts/PubStories';
import data from './data';
import Carousel from "./components/StoriesCarousel";
import Navigation from "./components/Navigation";


function App() {
  const [ pub, setPub ] = useState([]);

  useEffect(() => {
    // axiosWithAuth()
    //   .get('')
    //   .then(res => setPub(res.data))
    //   .catch(err => console.log(err.message));
    
    setPub([...data]);
  }, []);

  return (
    console.log(pub),
    
    <PubContext.Provider value={pub}>
      <Router>
        <Navigation />
        <Route path="/login" component={Login} />
        {/* <PrivateRoute exact path='/portal' component={Admin} />
        <Route path='/aboutus' component={AboutUs} /> */}
        <Route path='/stories' component={Stories} />
        <Route exact path="/" component={Carousel} />
        {/* <PrivateRoute exact path="/carousel-stories" component={Carousel} /> */}
        {/* <Route path='/submit' component={Submit} /> */}
      </Router>
    </PubContext.Provider>
  );
}

export default App;
