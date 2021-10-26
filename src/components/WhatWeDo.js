import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const Whatwedo = () => {
  return (
    <div>
      <Row>
        <Col className="source-text">WHAT WE DO</Col>
      </Row>
      <Row className="what-we-do-wrap">
        <Col className="what-we-do-image" md={12} lg={6}>
          <Image
            src=""
            alt="IMAGE"
            style={{ height: "80vh", color: "white" }}
            fluid
          />
        </Col>
        <Col className="what-we-do-text" md={12} lg={6}>
          <Container>
            <p className="what-we-do-text-head">Technical Sessions</p>

            <hr style={{ color: "white", height: "3px" }}></hr>
            <p className="what-we-do-text-text">
              Technical sessions on Python, Problem solving and Machine learning
              sessions will be conducted to guide students to think out of the
              box.
            </p>
          </Container>
        </Col>
      </Row>
      <Row className="what-we-do-wrap">
        <Col className="what-we-do-text" md={12} lg={6}>
          <Container>
            <p className="what-we-do-text-head">Tech Talks</p>

            <hr style={{ color: "white", height: "3px" }}></hr>
            <p className="what-we-do-text-text">
              Technical talks on Math behind Machine Learning and career
              opportunities in data science. These talks will be conducted by
              experienced data scientists. The purpose of these talks is to
              provide an insight on the importance of Mathematics in Machine
              learning and to explain about the various roles in organization
              which is related to Data.
            </p>
          </Container>
        </Col>
        <Col className="what-we-do-image" md={12} lg={6}>
          <Image
            src=""
            alt="IMAGE"
            style={{ height: "80vh", color: "white" }}
            fluid
          />
        </Col>
      </Row>
      <Row className="what-we-do-wrap">
        <Col className="what-we-do-image" md={12} lg={6}>
          <Image
            src=""
            alt="IMAGE"
            style={{ height: "80vh", color: "white" }}
            fluid
          />
        </Col>
        <Col className="what-we-do-text" md={12} lg={6}>
          <Container>
            <p className="what-we-do-text-head">Annual Fests</p>

            <hr style={{ color: "white", height: "3px" }}></hr>
            <p className="what-we-do-text-text">
              The annual technical fest, FOSS Camp is a platform to showcase
              technical skills of students. It includes various technical events
              conducted on an inter-collegiate level to spread the ideology of
              FOSS. FOSS camp will be conducted in the month of October and will
              include many events running throughout the week.
            </p>
          </Container>
        </Col>
      </Row>
      <Row className="what-we-do-wrap">
        
        <Col className="what-we-do-text" md={12} lg={6}>
          <Container>
            <p className="what-we-do-text-head">Mock Placement Sessions</p>

            <hr style={{ color: "white", height: "3px" }}></hr>
            <p className="what-we-do-text-text">
              “Landing a job is not less than winning a war”. Mock placement
              aims at preparing under grads for interviews by mocking the
              interview process and guide them in the right path. LCC aluminites
              working at tech giant companies are invited to guide the under
              grads. Students are also assisted during their preparation through
              timely placement preparation session conducted by LCC.
            </p>
          </Container>
        </Col>
        <Col className="what-we-do-image" md={12} lg={6}>
          <Image
            src=""
            alt="IMAGE"
            style={{ height: "80vh", color: "white" }}
            fluid
          />
        </Col>
      </Row>
    </div>
  );
};

export default Whatwedo;
