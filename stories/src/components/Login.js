import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        console.log("cd: Login.js: Login: login then: res: ", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/"); // <== Change the route once component is made
      })
      .catch((err) =>
        console.log("cd: Login.js: Login: login then: err: ", err.message)
      );
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
