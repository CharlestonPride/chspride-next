import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Layout from "../components/elements/layout/layout";
import WaveComponent from "../components/visual/waveComponent";

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
                      data-form-id="e7fadf73-5f44-49a4-9fcc-bd7174e9b8f4"
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
