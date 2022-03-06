import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ObliqueHeader({ style, children }) {
  return (
    <header>
      <div className="page-header section-height-75">
        <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
          <div
            className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
            style={style}
          ></div>
        </div>
        <Container>
          <Row>
            <Col
              md="7"
              lg="6"
              className="d-flex justify-content-center flex-column"
            >
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}
