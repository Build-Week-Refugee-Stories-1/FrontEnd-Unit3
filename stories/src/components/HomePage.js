import React, { useState, useEffect } from "react";
import StoryCard from "../components/StoryCard";
import data from "../data";
import StoriesCarousel from "./StoriesCarousel";

const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(data);
  });

  console.log(stories);
  return (
    <div>
      <StoriesCarousel />
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default HomePage;
