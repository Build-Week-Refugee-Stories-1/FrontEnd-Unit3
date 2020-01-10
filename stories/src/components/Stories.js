import React, { useState, useEffect } from "react";
import StoryCard from "../components/StoryCard";
import data from "../data";
import StoriesCarousel from "./StoriesCarousel";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(data);
  });

  return (
    <div>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
