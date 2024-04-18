import React from "react";
import { useState, useEffect } from "react";
import Typical from "react-typical";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Profile.css";
import headerImg from "./assets/header-img.svg";

export default function () {
  return (
    <section className="profile" id="home">
      <Container>
        <Row className="align-items-centre">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">
              <Typical
                loop={Infinity}
                steps={[
                  "DEVELOPER",
                  1000,
                  "REACT",
                  1000,
                  "JAVA",
                  1000,
                  "AGILE",
                  1000,
                  "COOL",
                  1000,
                  "ENTHUSIASTIC",
                  1000,
                  "INNOVATIVE",
                  1000,
                ]}
              />
            </span>
            <h1>{"Hi! I'm Michelle"}</h1>
            <p>
              I'm a Full Stack Software Developer based in Johannesburg. I love
              designing and coding user-friendly software solutions. Nice to meet you!
            </p>
            <span className="action-btns">
            <a href="TM%20Nkomo%20Resume.pdf" download="TM Nkomo Resume.pdf">
              <button>
                Save Resume
                <FontAwesomeIcon icon={faDownload} />
              </button>
              
            </a>
              <button>
              <a href="#connect" className="contact-btn">Contact Me <ArrowRightCircle size={25} /></a>{" "}
            </button>
            </span>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
