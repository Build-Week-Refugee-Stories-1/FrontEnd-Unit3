import React from "react";
import { PubContext } from "../contexts/PubStories";
import { Grid, Card, Container, Image } from "semantic-ui-react";

const Stories = props => {
  const story = React.useContext(PubContext);
  return (
    <>
      <Container>
        <h1>Refugee Stories</h1>
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
                    </Card>
                  </Grid.Column>
                ))}
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};
export default Stories;


