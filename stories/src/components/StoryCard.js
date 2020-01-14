import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const StoryCard = ({ story }) => {
  console.log("single story", story);
  return (
    <Card>
      <CardBody className="text-left">
        <CardTitle>
          <Link
            to={{ pathname: `/story/${story.id}`, state: { story: story } }}
          >
            {story.title}
          </Link>
        </CardTitle>
        <CardText>{story.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default StoryCard;
