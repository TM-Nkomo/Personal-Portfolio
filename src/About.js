import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import "./styles/About.css";
import colorSharp from "./assets/color-sharp.png"

export default function () {

  return (
    <section className="skill" id="about">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2> About Me</h2>
              <br/> <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam 
                nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-img-left" src={colorSharp}/>
    </section>
  );
}
