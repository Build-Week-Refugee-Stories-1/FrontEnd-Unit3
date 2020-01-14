import React, { useState, useEffect } from "react";
import data from "../data";

const SingleStory = (props) => {
  console.log(props);
  const [story, setStory] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    setStory(props.location.state.story);
  }, []);

  console.log(story);
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
    </div>
  );
};

export default SingleStory;
