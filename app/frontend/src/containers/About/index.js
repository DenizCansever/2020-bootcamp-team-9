import React from "react";
import SectionAbout from "../../components/layout/SectionAbout";
import SectionTeam from "../../components/layout/SectionTeam";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    
    <Row>
      <Col>
        <SectionAbout />
        <SectionTeam />
      </Col>
    </Row>
  );
};

export default About;
