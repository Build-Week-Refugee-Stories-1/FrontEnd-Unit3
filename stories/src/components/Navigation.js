import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/Login">Login</Link>
      </div>
    </nav>
  );
};

export default Navigation;
