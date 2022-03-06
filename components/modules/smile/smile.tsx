import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Smile = ({}) => {
  return (
    <div className="my-5 mt-lg-10 py-5 bg-gradient-dark position-relative">
      <span className="mask bg-gradient-dark opacity-8"></span>
      <Container className="position-relative z-index-2">
        <Row>
          <Col md="8" lg="5" className="m-auto text-left">
            <h5 className="text-white mb-lg-0 mb-5">
              Support <strong>Charleston Pride</strong> with every Amazon
              purchase.
            </h5>
            <img src="/images/smile.png" width={330} height={78}></img>
          </Col>
          <Col lg="6" className="m-auto">
            <Row>
              <Col sm="4" xs="6" className="ps-sm-0 ms-auto">
                <a
                  href="https://smile.amazon.com/ch/27-4256750"
                  target="_blank"
                  type="button"
                  className="btn bg-gradient-warning mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block"
                >
                  Learn More
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Smile;
