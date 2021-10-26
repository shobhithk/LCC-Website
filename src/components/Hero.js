import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Animetext from "./AnimeText";

const Hero = () => {
  return (
    <div>
      <Row>
        <Col xs={12} md={6} className="hero hero-left">
          <Image src="" alt="IMAGE" style={{ height: "80vh" }} fluid />
        </Col>
        <Col xs={12} md={6} className="hero hero-right">
          <Row className="hero-text">
            <Col>LINUX CAMPUS CLUB</Col>
          </Row>
          <Row>
            <Col className="color-text">JSSSTU</Col>
          </Row>
          <Row>
            <Col className="hero-text-small">
              <Animetext></Animetext>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="source-text">MAY THE SOURCE BE WITH YOU</Col>
      </Row>
    </div>
  );
};

export default Hero;
