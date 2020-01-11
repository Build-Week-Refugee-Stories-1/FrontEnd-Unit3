import React from "react";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest}) => {
  return (
    <Route 
      {...theRest}
      render={() => {
        // localStorage.getItem("token")
        // I'd put this inside the if statement if I had a backend to get a token from.
        if (true) {
          return <Component />;
        } else {
          console.log(
            "cd: Privateroute.js: Privateroute: Route.render: redirecting!"
          );
          return <Redirect to="/" />
        }
      }}
    />
  );
};

export default PrivateRoute;