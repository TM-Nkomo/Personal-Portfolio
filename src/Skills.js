import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./styles/Skills.css";
import brand from "./assets/brand1.png";
import collab from "./assets/collaboration.png";
import dvt from "./assets/dvt2.png";
import strategicThinking from "./assets/thinking1.svg";
import webres from "./assets/webres2.png";
import thinking from "./assets/thinking3.png";
import colorSharp from "./assets/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2> Skills</h2>
              <p> Check out what I'm good at!</p>
              <Row>
                <div className="skill-item">
                  <img src={thinking} alt="Critical Thinking" />
                  <h5>Critical Thinking</h5>
                </div>
                <div className="skill-item">
                  <img src={dvt} alt="Development" />
                  <h5> Development</h5>
                </div>
                <div className="skill-item">
                  <img src={webres} alt="Responsive Web Design" />
                  <h5>Responsive Design</h5>
                </div>
                <div className="skill-item">
                  <img src={collab} alt="Collaboration" />
                  <h5>Teamwork</h5>
                </div>
                <div className="skill-item">
                  <img src={strategicThinking} alt="Strategic Thinking" />
                  <h5>Strategic Thinking</h5>
                </div>
                <div className="skill-item">
                  <img src={brand} alt="Branding" />
                  <h5>Branding</h5>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} alt="background"/>
    </section>
  );
}

export default Skills;