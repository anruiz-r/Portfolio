import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { eye } from "react-icons-kit/icomoon/eye";

function ProjectCard(props) {
  const { img, title, description, linkDemo, linkCode } = props;

  return (
    <div>
      <Card className="project-card" style={{ backgroundImage: `url(${img})` }}>
        <Card.Body>
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="project-btn-box">
            <Link to={linkDemo} target="_blank">
              <Button className="project-btn" variant="primary">
                <Icon icon={eye} size={12}/>
              </Button>
            </Link>
            <Link to={linkCode} target="_blank">
              <Button
                className="project-btn"
                variant="primary"
                onClick={linkCode}
              >
                <Icon icon={github} size={12} />
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
