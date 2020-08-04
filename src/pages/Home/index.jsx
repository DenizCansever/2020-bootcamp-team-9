import React from "react";

import { Header } from "./styles";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Header>
      <Container fluid>
        <Row>
          <Col sm={3}></Col>
          <Col
            sm={1}
            onClick={() => {
              history.push("/tv");
            }}
          >
            TV
          </Col>
          <Col sm={1}>Movies</Col>
          <Col sm={1}>Calendar</Col>
          <Col sm={4}></Col>
          <Col sm={1}>JOIN</Col>
          <Col sm={1}>SIGN IN</Col>
        </Row>
      </Container>
    </Header>
  );
};

export default Home;
