import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardLink from "react-bootstrap/CardLink";

function ProjectCard() {
  return (
    <div>
      <Card className="product-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Another Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button variant="primary">Demo</Button>
          <Button variant="primary">Front Repository</Button>
          <Button variant="primary">Back Repository</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
