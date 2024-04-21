import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function () {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <h2>Thanks for Visiting!</h2>
            <h4>made with love </h4>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/TM-Nkomo">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://za.linkedin.com/in/tm-nkomo">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:michellenkomo@outlook.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <p>Copyright 2024 TM Nkomo. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
