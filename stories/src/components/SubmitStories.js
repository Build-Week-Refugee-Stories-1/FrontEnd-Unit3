import React, { useState } from "react";
import { Card, Container } from "semantic-ui-react";
import { axiosWithAuth } from "../axiosWithAuth";

const initialState = {
    name: "",
    story: "",
    quote: ""
};

const SubmitStories = props => {
    const [state, setState] = useState(initialState);
    console.log(state)
    return (
        <>
            <Container>
                <h1>Submit Your Story </h1>
                <Card className="submit-card" fluid>
                    <input onChange={(e) => { setState({ ...state, name: e.target.value }) }}
                        value={state.name} placeholder="Name" />
                    <br />
                    <textarea className="textarea" onChange={(e) => { setState({ ...state, story: e.target.value }) }}
                        value={state.story} placeholder="Submit your story here" />
                    <br />
                    <textarea className="submitquote" onChange={(e) => { setState({ ...state, quote: e.target.value }) }}
                        value={state.quote} placeholder="Place a powerful quote here" />
                    <br />
                    <input type="file" id="avatar" accept="image/png, image/jpeg"
                        onChange={(e) => { setState({ ...state, image: e.target.value }) }}
                        value={state.image} />
                    <br />
                    <button onClick={(e) => {
                        e.preventDefault();
                        // axiosWithAuth()
                        //     .post("/api/stories", state)
                        //     .then(res => {
                        //         console.log(res);
                        //     })
                        //     .catch(err => {
                        //         console.log(err)
                        //     });
                        // If there was a backenkd then I definitely would have used this code to add a story to the list.
                    }}
                    >Submit</button>
                </Card>
            </Container>
        </>
    )
};
export default SubmitStories;








