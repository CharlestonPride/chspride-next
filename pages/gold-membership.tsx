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

const GoldMembership = () => {
  return (
    <Layout
      title="Charleston Pride 2023 Gold Membership"
      description="Charleston Pride 2023 Gold Membership"
    >
      <ExternalFrame
        title="Charleston Pride 2023 Gold Membership"
        color="warning"
        iframeSrc="https://registration.planningpod.com/?ssid=NzkyMTIy"
      >
        <p className="lead">
          Interested in VIP access to our ticketed events? Missing our Friends
          of Pride program? Well, great news: We've created the Charleston Pride{" "}
          <strong>Gold Membership</strong> just for you! For the remainder of
          June -- in celebration and honor of Pride Month -- the 2023 Charleston
          Pride <strong>Gold Membership</strong> is only <strong>$150</strong>.
          That makes each VIP access ticket $37.50 or less for the remainder of
          the year! Benefits can include, but are not limited to: access to VIP
          bars, drink specials, early event entry, meet-and-greet opportunities,
          VIP exclusive events, and more!
        </p>
        <p className="lead">
          As a 2023 <strong>Gold Membership</strong> card holder, you not only
          get a gold metallic commemorative card to flaunt to family and
          friends, but you also get VIP access (plus benefits) for the remainder
          of the year! What events will have VIP access for the remainder of the
          year? In chronological order: Charleston Pride Pageant, Prism Party,
          Charleston Pride Festival, and a Gala-style event to kickstart our
          fundraising for 2024. We may even add a fifth VIP-exclusive event this
          Fall during Pride Week, so keep checking back!{" "}
          <strong>Gold Membership</strong> is first come, first serve. Limited
          quantities.
        </p>
      </ExternalFrame>
    </Layout>
  );
};

export default GoldMembership;
