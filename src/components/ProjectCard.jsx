import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardLink from "react-bootstrap/CardLink";

function ProjectCard(props) {
  const {img}= props

  return (
    <div>
      <Card className="product-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Description
          </Card.Text>
          <Card.Link href="#">Another Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> 
          <Button variant="primary">Demo</Button>
          <Button variant="primary">Front Repository</Button>
          <Button variant="secondary">Back Repository</Button> 
        </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
