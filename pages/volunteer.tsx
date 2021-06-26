import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/elements/Layout/Layout";
import ExternalFrame from "../components/modules/ExternalFrame/ExternalFrame";

const Volunteer = () => {
  return (
    <Layout
      title="Volunteer with Charleston Pride"
      description="Volunteers don't just do the work - they make it work."
    >
      <ExternalFrame
        title="Volunteer with  Charleston Pride"
        color="warning"
        iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLSfzVngmWTbpu2F65xD50vqYUue4K1UG8wAN9iKHap3qQlvlPA/viewform?embedded=true"
      >
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <p className="lead">
              As a volunteer, you will help ensure the success of events
              throughout the year including fundraising events that will fund
              Pride Week.
            </p>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Volunteer;
