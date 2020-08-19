import React from "react";
import SectionProfile from "../../components/layout/SectionProfile";
import { Row, Col } from "react-bootstrap";
import WatchListCard from "../../components/layout/WatchListCard";

const Profile = () => {
  return (
    <Row>
      <Col>
        <SectionProfile />
        <WatchListCard />
      </Col>
    </Row>
  );
};

export default Profile;
