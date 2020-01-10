import React, { useState, useEffect } from "react";
import data from "../data";

const SingleStory = (props) => {
  console.log(props);
  const [story, setStory] = useState({});
  const { id } = props.match.params;

  useEffect(() => {
    setStory(data.filter((story) => story.id === Number(id))[0]);
  }, []);

  console.log(story);
  return (
    <div>
      <h2>{story.name}</h2>
      <p>{story.story}</p>
    </div>
  );
};

export default SingleStory;
