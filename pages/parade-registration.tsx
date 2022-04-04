import React, { ReactNode } from "react";
import Layout from "../components/elements/layout/layout";
import { Col, Container, Row } from "react-bootstrap";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";
import CloudImage from "../components/elements/cloudImage/cloudImage";

type Props = {
  title: string;
  imageId: string;
  price: number;
  children?: ReactNode | ReactNode[];
};

const Entry = ({ title, imageId, price, children }: Props) => {
  return (
    <div className="card h-100">
      <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
        <CloudImage
          className="img-fluid border-radius-lg"
          imageId={imageId}
        ></CloudImage>
      </div>
      <div className="card-body pt-2">
        <h2>{title}</h2>
        <h3 className="text-gradient text-primary">${price}</h3>
        <p className="card-description mb-4">{children}</p>
      </div>
    </div>
  );
};
const ParadeRegistration = () => {
  return (
    <Layout
      title="Charleston Pride Parade 2022 Registration"
      description="Parade registration for Charleston Pride 2022."
    >
      <ExternalFrame
        title="Charleston Pride Parade 2022 Registration"
        color="warning"
        iframeSrc="https://registration.planningpod.com/?ssid=NTA1NjAy"
        iframeHeight="2000px"
      >
        <Row>
          <Col
            xs={{ span: 6, offset: 3 }}
            lg="4"
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 "
          >
            <CloudImage
              className="w-100 border-radius-lg shadow d-none d-lg-block"
              imageId="2022/awomtb"
            ></CloudImage>
            <CloudImage
              className="w-100 border-radius-lg shadow d-lg-none"
              imageId="2022/mqnelw"
            ></CloudImage>
          </Col>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <p className="lead">
              On <strong>Saturday, June 25th, 2022</strong> we are excited to
              celebrate Pride with our annual <strong>Pride Parade</strong> in
              historic Downtown Charleston! Whether you and your organization
              would like to join and walk in the parade, ride along in a
              vehicle, or create a unique themed float, all are welcome to take
              part in the festivities. If you have any questions about parade
              and float entries, please email{" "}
              <a href="mailto:parade@charlestonpride.org">
                parade@charlestonpride.org
              </a>
            </p>
            <h3 className="text-gradient text-warning">Rules for the Parade</h3>
            <ul className="text-left">
              <li>
                Motorcycles cannot rev their engines. Violators will be fined.
              </li>
              <li>
                Floats must be secured and inspected for safety during transit.
              </li>
              <li>
                Items cannot be thrown from floats. This includes any object
                (flowers, candy, etc.). Participants may walk the route and hand
                items out to Parade viewers.
              </li>
              <li>
                Trash and debris must be cleaned up by your group, especially in
                the waiting areas prior to the start of the Parade.
              </li>
              <li>
                No hanging out of sunroofs or riding on hoods/tops/backs of
                vehicles. Participants may ride in the back of pickup trucks,
                but the tailgate must be closed.
              </li>
              <li>
                Floats must clear 6 feet below street/traffic lights. Max.
                height is 11 feet. Please take the low hanging branches
                surrounding the staging area at Wragg Mall into consideration
                during your planning process.
              </li>
              <li>No nudity or inappropriate attire allowed.</li>
              <li>
                Parade participants should <strong>not</strong> engage with any
                protesters along the parade route.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 0 }}
            className="mt-3"
          >
            <Entry title="Walking Entry" imageId="parade1_jxra2b" price={50}>
              Get your steps in with Pride with a walking entry in the parade.
              This entry covers up to <strong>50</strong> members, with a price
              as lows as $1 per walking member. (Note: If you have more than 50
              walking members, you will need to purchase additional walking
              entries).
            </Entry>
          </Col>
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 0 }}
            className="mt-3"
          >
            <Entry title="Vehicle Entry" imageId="parade_ryhqxt" price={100}>
              Ride through in style with a vehicle entry in the parade. This
              entry covers <strong>1</strong> vehicle and up to{" "}
              <strong>5</strong> walking members. (Note: These walkers are for
              crowd safety and driver assistance. If you have more than 5
              walking members, you will need to purchase additional walking
              entries).
            </Entry>
          </Col>
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 0 }}
            className="mt-3"
          >
            <Entry title="Float Entry" imageId="parade7_xbzzqw" price={150}>
              Are themed rides something your organization loves? Then the float
              entry is the option for you! This entry covers <strong>1</strong>{" "}
              float and up to
              <strong>10</strong> walking members. Get those creative minds
              working and design a fun float for your organization to ride
              through Downtown Charleston. (Note: These walkers are for crowd
              safety and driver assistance. If you have more than 10 walking
              members, you will need to purchase additional walking entries).
            </Entry>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default ParadeRegistration;
