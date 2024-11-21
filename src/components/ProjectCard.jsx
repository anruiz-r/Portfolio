import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardLink from "react-bootstrap/CardLink";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import {eye} from 'react-icons-kit/icomoon/eye'

function ProjectCard(props) {
  const {img, title, description}= props

  return (
    <div>
      <Card className="project-card" style={{backgroundImage: `url(${img})`,
  }}>
      

        <Card.Body>
          <Card.Title><strong>{title}</strong></Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        <div className="project-btn-box">
          <Button className="project-btn" variant="primary"><Icon icon={eye} /></Button>
          <Button className="project-btn" variant="primary"><Icon icon={github} /></Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
