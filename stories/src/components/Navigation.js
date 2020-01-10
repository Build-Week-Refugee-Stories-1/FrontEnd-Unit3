import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/HomePage">Home</Link>
        <Link to="/Stories">Stories</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Navigation;
