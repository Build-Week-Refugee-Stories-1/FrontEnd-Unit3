import React, { useState } from "react";
import Navigation from './Navigation';
import axios from 'axios';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const login = (e) => {
    e.preventDefault();
    props.history.push("/portal")
    // axios
    //   .post('http://localhost:5000/api/login', credentials)
    //   .then(res => {
    //     console.log("cd: Login.js: Login: login then: res: ", res);
    //     localStorage.setItem("token", res.data.payload);
    //      // <== Change the route once component is made
    //   })
    //   .catch((err) =>
    //     console.log("cd: Login.js: Login: login then: err: ", err.message)
    //   );
    // This is totally the code I'd have used to log in if we had a backend.
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Navigation />
      <h1>Refugee Stories</h1>
      <form onSubmit={login}> 
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
