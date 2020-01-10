import React, { useState } from "react";
import {  Card, Container  } from "semantic-ui-react";
import { axiosWithAuth } from "../axiosWithAuth";

const SubmitStories = props => {
  const [state, setState] = useState({
    name: "",
    story:"",
    quote:""
  });
  console.log(state)
  return (
    <> 
    <Container>
      <h1>Submit Your Story </h1>
        <Card className="submit-card" fluid>
          <input onChange={(e) => {setState({...state, name: e.target.value})}} 
            value={state.name} placeholder ="Name" />
            <br />
          <textarea className="textarea" onChange={(e) => {setState({...state, story: e.target.value})}} 
          value={state.story} placeholder="Submit your story here"  /> 
          <br />
          <button onClick={(e) => {
            e.preventDefault();
            axiosWithAuth()
              .put("")
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err)
              });
            }}
          >Submit</button>
        </Card>
    </Container>
    </>
  )
};
export default SubmitStories;








