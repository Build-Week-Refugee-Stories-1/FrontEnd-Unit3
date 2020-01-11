import React, {useState} from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import Navigation from './Navigation';
import { PubContext } from "../contexts/PubStories";
import { Grid, Card, Container, Image, Button } from "semantic-ui-react";

import data from '../data';

const initialState = {
    name: "",
    story: "",
    quote: ""
};

const Admin = props => {
    const story = React.useContext(PubContext);
    const [editStory, setEditStory] = React.useState(initialState);

    const deleteStory = e => {
        e.preventDefault();
        // axiosWithAuth()
        //     .delete(`/api/stories/${story.id}`)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err.message));
        //  If I had a backend then I would use this code to remove a story from my site.
    };

    const editStuff = e => {
        e.preventDefault();
        // axiosWithAuth()
        //      .put(`/api/stories/${story.id}`, editStory)
        //      .then(res => console.log(res))
        //      .catch(err => console.log(err.message));
        // Had I had a backend this is the way I would have changed the object in the array in the API.
    }

    return (
        <>
            <Navigation />
            <Container>
                <h1>Admin Page</h1>
                <Card fluid>
                    <Card.Content>
                        <Grid columns={4}>
                            <Grid.Row>
                                {story.map(stuff => (
                                    <Grid.Column key={stuff.id}>
                                        <Card color="black">
                                            <Image src={stuff.image} wrapped ui={false} />
                                            <Card.Content>
                                                <Card.Header>{stuff.name}</Card.Header>
                                            </Card.Content>
                                            <br />
                                            <Card.Content>
                                                <Card.Description>{stuff.story}</Card.Description>
                                            </Card.Content>
                                            <br />
                                            <Card.Content>
                                                <Card.Header>"{stuff.quote}"</Card.Header>
                                            </Card.Content>
                                            <br />
                                            <button onClick={deleteStory}>Delete</button>
                                            <br />
                                            <input onChange={(e) => { setEditStory({ ...editStory, name: e.target.value }) }}
                                                value={editStory.name} placeholder="Change Name" />
                                            <br />
                                            <textarea className="editStory" onChange={(e) => { setEditStory({ ...editStory, story: e.target.value }) }}
                                                value={editStory.story} placeholder="Edit Story" />
                                            <br />
                                            <textarea className="editQuote" onChange={(e) => { setEditStory({ ...editStory, quote: e.target.value }) }}
                                                value={editStory.quote} placeholder="Edit Quote" />
                                            <br />
                                            <button onClick={editStuff}>Submit</button>
                                        </Card>
                                    </Grid.Column>
                                ))}
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                </Card>
            </Container>
        </>
    )
};

export default Admin;