  
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="">Home</Link>
        <Link to="">Stories</Link>
        <Link to="">Submit</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navigation;

