import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col>
      <div className="proj-img">
        <img src={imgUrl} />
        <div className="proj-text">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={link}>
            <button className="proj-btn">VIEW</button>
          </a>
        </div>
      </div>
    </Col>
  );
};
