import React from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import Navigation from './Navigation';
import { PubContext } from "../contexts/PubStories";

import data from '../data';

const Admin = props => {
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


    // const deleteStory = e => {
    //     axiosWithAuth()
    //         .delete(`/colors/${color.id}`)
    // };

    return (
        <PubContext.Provider value={pub}>
            <Navigation />
            {/* {story.map(stuff => (
                <div>
                    <p>{stuff.name}</p>
                    <p>{stuff.story}</p>
                    <p>{stuff.quote}</p>
                    <button
                        onClick={e=>{
                            e.preventDefault();
                            // deleteStory();
                        }}
                        >Delete</button>
                </div>
            ))} */}
        </PubContext.Provider>
    )
};

export default Admin;