import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import Animemission from './AnimeMission';

const Visionmission = () => {
  return (
    <div class="vision-mission-wrap">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Row>
              <Col className="vision-title">
                <i class="fas fa-eye" style={{ color: "white"}}></i> VISION{" "}
                <hr style={{ color: "white", height: "3px" }}></hr>
                <Row>
                  <Col style={{fontWeight: '600', fontSize: '1.5rem', color: "white"}}>
                    Be an excellent technical club in imparting and enhancing
                    the technical and soft-skills of individuals to benefit the
                    society with new ideas and innovation.
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={6}>
            <Row>
              <Col className="vision-title">
                <i class="fas fa-graduation-cap" style={{ color: "white"}}></i> MISSION{" "}
                <hr style={{ color: "white", height: "3px" }}></hr>
                <Row>
                  <Col style={{fontWeight: '600', fontSize: '1.5rem'}}>
                  <Animemission></Animemission>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Visionmission;
