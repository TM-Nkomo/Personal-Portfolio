import "react-multi-carousel/lib/styles.css";
import "./styles/Portfolio.css";
import Carousel from "react-multi-carousel";
import "./styles/Skills.css";
import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import gmart from "./assets/goonmart.png";
import sattack from "./assets/sattack1.png";
import dp from "./assets/dp.png";
import portf from "./assets/portfolio.png";
import colorSharp2 from "./assets/color-sharp2.png";

export const Portfolio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const projects = [
    {
      title: "GoonMart",
      description: "Online buying and selling platform",
      imgUrl: gmart,
      link: "https://goonmart-online-store.firebaseapp.com/",
    },
    {
      title: "Shark Attack",
      description: "A shark vs fish game",
      imgUrl: sattack,
      link: "https://github.com/GoonMart-Goons/Shark-Game",
    },
    {
      title: "DP Tool",
      description:
        "A platform for individuals to learn and practice dynamic programming concepts",
      imgUrl: dp,
      link: "https://dynamic-programming-tool.web.app/",
    },
    {
      title: "Website Portfolio",
      description: "A summary of what I'm about",
      imgUrl: portf,
      link: "http://localhost:3000/",
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Portfolio</h2>
            <p>Here are some of the cool projects I've worked on!</p>
            <Row>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="portfolio-slider"
              >
                {projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                      className="portfolio-project"
                    />
                  );
                })}
              </Carousel>
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-img-right" src={colorSharp2} />
    </section>
  );
};
export default Portfolio;
