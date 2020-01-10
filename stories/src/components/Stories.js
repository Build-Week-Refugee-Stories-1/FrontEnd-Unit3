import React from 'react';
import { PubContext } from '../contexts/PubStories';

const Stories = props => {
    const story = React.useContext(PubContext)

    return (
        <>
            {story.map(stuff => (
                <div>
                                    <p>{stuff.name}</p>
                <p>{stuff.story}</p>
                <p>{stuff.quote}</p>
                </div >
            ))}
        </> 
    )
}
   

export default Stories;
