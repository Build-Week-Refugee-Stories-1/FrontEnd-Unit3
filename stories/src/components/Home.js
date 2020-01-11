import React from "react";
import Navigation from './Navigation';
import Stories from './Stories';
import Carousel from './StoriesCarousel';
import SubmitStories from './SubmitStories';
import { PubContext } from '../contexts/PubStories';
import axios from 'axios';

import data from '../data';
import { axiosWithAuth } from "../axiosWithAuth";


const Home = () => {
    const [pub, setPub] = React.useState([]);

    React.useEffect(() => {
        axiosWithAuth()
        .get('/api/stories')
          .then(res => {
            console.log("getting data", res);
            setPub(res.data)
          })
          .catch(err => console.log("getting data", err.message));

        // setPub([...data]);
    }, []);


    return (
        <PubContext.Provider value={pub}>
            <Navigation />
            <Carousel />
            <Stories />
            <SubmitStories />
        </PubContext.Provider>
    )
}

export default Home;