import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Layout from "../components/elements/layout/layout";
import Lead from "../components/elements/lead/lead";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";
import ObliqueHeader from "../components/modules/header/obliqueHeader";

const headerStyle = {
  backgroundImage: `url(https://charleston-pride.stream.prepr.io//5xcwstriokh1-festival-yx5s7m.jpg)`,
};

const Donate = () => {
  return (
    <Layout
      title="Donate to Charleston Pride"
      description="Make a Donation to Charleston Pride"
    >
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-info">Make a Donation</h1>
        <h1>Help Make Charleston Pride a Reality!</h1>
      </ObliqueHeader>
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Lead>
              A lot of time, effort, and money goes into organizing and putting
              on Charleston Pride. Charleston Pride Festival, Inc is funded
              strictly through sponsors and funds raised at events.
            </Lead>
            <Lead>
              Due to this fact, we have to raise money throughout the year in
              order for Charleston Pride to be successful. If you cannot make it
              to one of our fundraisers, you can now donate here!
            </Lead>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col>
              <Card className="mt-4">
                <Card.Body>
                  <iframe
                    src="https://forms.donorsnap.com/form?id=5c8403f6-7043-4220-a717-b6ccbcafb936"
                    height="1200"
                    width="99%"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </Layout>
  );
};

export default Donate;
