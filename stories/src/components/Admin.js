import React, {useState} from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import Navigation from './Navigation';
import { PubContext } from "../contexts/PubStories";
import { Grid, Card, Container, Image, Button} from "semantic-ui-react";
import data from '../data';


const Admin = props => {
  const [pub, setPub] = useState([]);
  // const [edit, setEdit] = useState(initialStory)

  // This is the CRUD operation to get the api
  React.useEffect(() => {
      // axiosWithAuth()
      //   .get('/stories')
      //   .then(res => 
      //     console.log("getting data", res)
      //     // setPub(res.data)
      //     )
      //   .catch(err => console.log(err.message));

      setPub([...data]);
  }, []);

  // This is the CRUD operation to edit (put) on the API. 

  // const editStory = story => {
  //   setStory(true)
  //   setStoryEdit(story);
  // };

  // const saveEdit = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .put(`api/stories${pub.id}`, edit)
  //     .then(res => {
  //       console.log(res);
  //       setEdit(res.data)
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // };

  // This is the CRUD operation to delete an item from the api
  const deleteStory = () => {
    axiosWithAuth()
      .delete(`api/stories${pub.id}`)
      .then( res => {
        setPub(res.data)
      }
    )
  }

    return (
        <PubContext.Provider value={pub}>
        <Navigation />
          <Container>
            <Card fluid>
              <Card.Content>
                <Card.Header><h1>Admin Page</h1></Card.Header>
              </Card.Content>
              <Card.Content>
                <Grid columns={4}>
                  <Grid.Row>
                    {pub.map(stuff => (
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
                          {/* <button
                            onCLick={() => editStory(story)}
                            >Edit</button> */}
                          <Button
                            onCLick={e => {
                              e.stopPropagation();
                              deleteStory(pub)
                            }}
                          >Delete</Button>
                          <br />
                        </Card>
                      </Grid.Column>
                    ))}
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </Container>
        </PubContext.Provider>
      );
};

export default Admin;