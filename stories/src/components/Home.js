import React from "react";
import Navigation from './Navigation';
import Stories from './Stories';
import Carousel from './StoriesCarousel';
import SubmitStories from './SubmitStories';
import { PubContext } from '../contexts/PubStories';


import data from '../data';


const Home = () => {
    const [pub, setPub] = React.useState([]);

    React.useEffect(() => {
        // axiosWithAuth()
        //   .get('/colors')
        //   .then(res => 
        //     console.log("getting data", res)
        //     // setPub(res.data)
        //     )
        //   .catch(err => console.log(err.message));

        setPub([...data]);
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