import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ConstantContactInline = () => {
  return (
    <Container className="pt-5 pb-7">
      <Row>
        <Col>
          <div className="card bg-gradient-primary">
            <div className="card-body">
              <Row>
                <Col lg={6} className="text-left mt-5">
                  <h4 className="text-white">Sign up to Stay in Touch!</h4>
                  <p className="mb-0 text-white">
                    Sign up to receive our newsletter and announcements for
                    upcoming events.
                  </p>
                </Col>
                <Col lg={6} className="ms-auto text-right mt-4 mt-lg-0">
                  <div className="mb-0">
                    <div
                      className="ctct-inline-form"
                      data-form-id="671d80e8-605a-47ca-b2c6-0d1a9d880026"
                    ></div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ConstantContactInline;
