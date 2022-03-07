import React from "react";
import Layout from "../components/elements/layout/layout";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";
import { Row, Col } from "react-bootstrap";

const Plans = () => {
  return (
    <>
      <Row>
        <Col md="8" lg="6" className="mx-auto text-center mb-5">
          <h3 className="">Pick the best plan for you</h3>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="ms-lg-auto mb-sm-0 mb-5">
          <div className="card text-center bg-gray-200">
            <div className="card-header bg-transparent">
              <h5 className="mt-4 mb-2">Rainbow</h5>
              <h2>
                $20 <small className="text-sm font-weight-bold">/ month</small>
              </h2>
            </div>
            <div className="card-body text-dark">
              <ul className="list-unstyled  mx-auto">
                <li>
                  Free Entry to Official Charleston Pride Events/Fundraisers{" "}
                  <sup>1</sup>
                </li>
                <hr className="horizontal dark" />
                <li>
                  Access to the VIP Tent at the Festival <sup>2</sup>
                </li>
                <hr className="horizontal dark" />
                <li>VIP Access to Prism</li>
                <hr className="horizontal dark" />
                <li>
                  Meet and Greet with Entertainment <sup>3</sup>
                </li>
                <hr className="horizontal dark" />
                <li>
                  Acknowledgment in Pride Guide <sup>4</sup>
                </li>
                <hr className="horizontal dark" />
                <li>Exclusive Gift Only Available to Friends of Pride </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md="6" className="me-lg-auto">
          <div className="card text-center bg-gradient-danger">
            <div className="card-header bg-transparent">
              <h5 className="mt-4 mb-2 text-white">Double Rainbow</h5>
              <h2 className="text-white">
                $30 <small className="text-sm">/ month</small>
              </h2>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mx-auto text-white">
                <li>
                  <b>2x</b> Free Entry to Official Charleston Pride
                  Events/Fundraisers <sup>1</sup>
                </li>
                <hr className="horizontal light" />
                <li>
                  <b>2x</b> Access to the VIP Tent at the Festival <sup>2</sup>
                </li>
                <hr className="horizontal light" />
                <li>
                  <b>2x</b> VIP Access to Prism
                </li>
                <hr className="horizontal light" />
                <li>
                  <b>2x</b> Meet and Greet with Entertainment <sup>3</sup>
                </li>
                <hr className="horizontal light" />
                <li>
                  Acknowledgment in Pride Guide <sup>4</sup>
                </li>
                <hr className="horizontal light" />
                <li>Exclusive Gift Only Available to Friends of Pride </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="card my-5">
            <ol>
              <li>
                Including but not limited to annual Pride on the Harbor Cruises
                and Toast to Equality. Tickets can be reserved by emailing{" "}
                <a href="mailto:friends@charlestonpride.org">
                  friends@charlestonpride.org
                </a>
                . Tickets must be requested a minimum of 24hrs before start of
                event and event must not already be sold out.
              </li>
              <li>VIP tent includes access to open bar and hors d'oeuvres.</li>
              <li>Meet and greet only applicable when available.</li>
              <li>
                Acknowledgment will only appear if desired. Membership must be
                started before the cut off date for the Pride Guide.
              </li>
            </ol>
          </div>
        </Col>
      </Row>
    </>
  );
};

const Gift = () => {
  return (
    <>
      <h3 className="text-center">
        Pick From One of the Following as Your Exclusive Gift
      </h3>
      <Row>
        <Col>
          <img
            src="/images/friends/hat.png"
            alt="Friend of Pride Hat"
            width={300}
            height={300}
            className="border-radius-lg"
          />
        </Col>
        <Col>
          <img
            src="/images/friends/shirt.png"
            alt="Friend of Pride Shirt"
            width={300}
            height={300}
            className="border-radius-lg"
          />
        </Col>
        <Col>
          <img
            src="/images/friends/visor.png"
            alt="Friend of Pride Visor"
            width={300}
            height={300}
            className="border-radius-lg"
          />
        </Col>
      </Row>
    </>
  );
};

const FriendsOfPride = () => {
  return (
    <Layout
      title="Become a Friend of Pride"
      description="At Charleston Pride, we believe that we can make a big difference in our community with a little help from our friends."
    >
      <ExternalFrame
        title="Become a Friend of Pride"
        color="danger"
        iframeSrc="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/friends.html"
      >
        <p className="lead">
          <strong>Friends of Pride (FOP)</strong> is a donation program that
          uses the funds to maintain the <strong>Equality Hub</strong> at 1801
          Reynolds Ave, Unit A, North Charleston, SC. The Hub space is used for
          the Charleston Pride office, CP Board meetings, as well as a safe
          space for local organizations to meet. Your FOP membership helps pay
          for rent, utilities, insurance and maintenance of the shared Hub
          office and meeting space.
        </p>
        <p className="lead">
          As a <strong>Friend of Pride</strong> you will get exclusive access to
          many of our events and some extra perks along the way.
        </p>
        <p>
          All FOP memberships are for a one year term commitment, then go to a
          month-to-month status. Friends of Pride benefits for events are valid
          after the initial one-year membership. If there are any questions,
          please reach out to us at{" "}
          <a href="mailto:friends@charlestonpride.org">
            friends@charlestonpride.org
          </a>
        </p>
        <Plans />
        <Gift />
      </ExternalFrame>
    </Layout>
  );
};

export default FriendsOfPride;
