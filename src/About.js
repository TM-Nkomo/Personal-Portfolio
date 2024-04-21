import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./styles/About.css";
import colorSharp from "./assets/color-sharp.png";

export default function () {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-box">
              <h2> About Me</h2>
              <br /> <br />
              <p>
                My love for computers began at a young age, sparked by my
                curiosity to understand how these machines worked and the
                endless possibilities they offered. This passion led me to
                pursue a Bachelor of Science in Computer Science at the
                University of Witwatersrand, where I delved into the intricate
                world of software engineering and machine learning.{" "}
              </p>
              <p>
                {" "}
                Upon graduation, I embarked on a professional journey as a
                Junior Software Developer at a dynamic company in Johannesburg,
                specializing in Business Intelligence. Here, I have had the
                opportunity to apply my skills in Java, JavaScript, HTML, CSS,
                and React, working collaboratively with teams to deliver
                innovative solutions. My role has exposed me to various tools
                and methodologies, including GitHub for version control and Jira
                for project management, enhancing my understanding of software
                development lifecycles. Additionally, working with Backendless
                has deepened my knowledge of backend technologies and data
                management.{" "}
              </p>
              <p>
                {" "}
                Driven by a thirst for knowledge, I am constantly seeking to
                expand my skill set and stay abreast of emerging technologies
                and trends in the ever-evolving field of computer science. In my
                spare time, I channel my creativity into side projects, where I
                can experiment with new concepts and technologies, fueling my
                desire for growth and innovation. Outside of the professional
                realm, I indulge in hobbies such as playing chess, which not
                only sharpens my strategic thinking but also teaches me the
                importance of foresight and planning. I also find solace in
                running, embracing the challenge it presents and relishing the
                opportunity to push my physical boundaries.{" "}
              </p>
              <p>
                {" "}
                Ultimately, my aspiration is to make a meaningful impact in the
                field of computer science, leveraging my skills and experiences
                to contribute to advancements that shape the future. With
                dedication, perseverance, and a relentless pursuit of
                excellence, I am determined to carve a path that leaves a
                lasting legacy in the world of technology.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp} />
    </section>
  );
}
