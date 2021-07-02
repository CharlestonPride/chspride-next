import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Layout from "../components/elements/Layout/Layout";
import WaveComponent from "../components/visual/WaveComponent";

const MailingList = () => {
  return (
    <Layout title="Join our mailing list">
      <Container className="py-7">
        <Row>
          <Col lg="10" className="mx-auto">
            <div className="card shadow-lg">
              <div className="card-header p-5 position-relative bg-gradient-success">
                <h3 className="text-white mb-0">Subscribe to our Newsletter</h3>
                <div className="position-absolute w-100 z-index-1 ms-n5">
                  <WaveComponent />
                </div>
              </div>
              <div className="card-body p-sm-5 pt-0 opacity-8">
                <div className="card card-frame mt-4">
                  <div className="card-body">
                    <div
                      className="ctct-inline-form"
                      data-form-id="671d80e8-605a-47ca-b2c6-0d1a9d880026"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default MailingList;
