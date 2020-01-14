import React, { useState, useEffect } from "react";
import StoryCard from "../components/StoryCard";
import data from "../data";
import StoriesCarousel from "./StoriesCarousel";
import axios from "axios";
const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://bikewise.org:443/api/v2/incidents?page=1&proximity_square=100"
      )
      .then((res) => setStories(res.data.incidents))
      .catch((err) => console.log(err));
  }, []);

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
