import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { PubContext } from './contexts/PubStories';
import Login from "./components/Login";
import Admin from "./components/Admin";
import Home from './components/Home';
import data from './data';


function App() {
  const [pub, setPub] = React.useState([]);

  React.useEffect(() => {
    // axiosWithAuth()
    //   .get('/api/stories')
    //   .then(res => {
    //     console.log("getting data", res);
    //     setPub(res.data)
    //   })
    //   .catch(err => console.log("getting data", err.message));
    // If I was going to have a backend then this code would populate my site.

    setPub([...data]);
    // I just used dummy data that I put in my data.js file to prove my state management worked.
  }, []);

  return (
    <PubContext.Provider value={pub}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/portal' component={Admin} />
      </Router>
    </PubContext.Provider>
  );
}

export default App;
