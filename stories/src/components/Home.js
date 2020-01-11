import React from "react";
import Navigation from './Navigation';
import Stories from './Stories';
import Carousel from './StoriesCarousel';
import SubmitStories from './SubmitStories';


const Home = () => {

  return (
    <>
      <Navigation />
      <Carousel />
      <Stories />
      <SubmitStories />
    </>
  )
}

export default Home;