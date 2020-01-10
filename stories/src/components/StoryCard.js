import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const StoryCard = ({ story }) => {
  console.log("single story", story);
  return (
    <Card>
      <CardBody className="text-left">
        <CardTitle>
          <Link to={`/story/${story.id}`}>{story.name}</Link>
        </CardTitle>
        <CardText>{story.quote}</CardText>
      </CardBody>
    </Card>
  );
};

export default StoryCard;
