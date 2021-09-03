import React from "react";
import Layout from "../components/elements/Layout/Layout";
import { Container } from "react-bootstrap";

const VendorRegistration = () => {
  return (
    <Layout
      title="Charleston Pride Festival 2021 Vendor Registration"
      description="Vendor registration for the Charleston Pride Festival 2021."
    >
      <Container className="my-5">
        <div className="card card-background card-background-mask-primary mt-5">
          <div className="full-background"></div>
          <div className="card-body pt-5 text-center">
            <h1 className="text-white mb-2">2021 Pride Festival Update</h1>
            <p className="lead">
              It is with heavy hearts that <strong>Charleston Pride</strong> has
              made the decision to postpone our annual Pride Parade as well as
              the October 3rd Pride Festival at Riverfront Park. Originally, the
              festival was moved to North Charleston to accommodate distance and
              safety, but the rising Covid cases disallow holding a responsible
              event for participants.
            </p>
            <p className="lead">
              Several festivals in October have been postponed in the past week
              out of health and safety concerns, both in South Carolina and
              surrounding states. <strong>Charleston Pride</strong> agrees that
              this is the best course of action to ensure the well-being of
              everyone.
            </p>
            <p className="lead">
              For the duration of the pandemic, we plan to execute smaller,
              outdoor events and indoor-optional, for those comfortable. To
              maintain both a safe and fun environment, we will implement strict
              health-related protocols. Please understand that we did not make
              this decision lightly and we look forward to gathering again as
              soon as it is safer.
            </p>
            <p className="lead">
              With love and pride,
              <br /> Charleston Pride Board of Directors
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default VendorRegistration;
