import React, { ReactNode } from "react";
import Layout from "../components/elements/layout/layout";
import { Col, Row } from "react-bootstrap";
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
      title="Charleston Pride Parade 2023 Registration"
      description="Join us Saturday, June 17th, 2023 @ 9:00 am"
      imageUrl="https://res.cloudinary.com/charlestonpride-org/image/upload/v1679511376/2023/paradecover_s1b5ey.png"
    >
      <ExternalFrame
        title="Charleston Pride Parade 2023 Registration"
        color="info"
        iframeSrc="https://registration.planningpod.com/?ssid=NzM2ODMw"
        iframeHeight="2000px"
      >
        <Row>
          <Col
            xs={{ span: 8, offset: 2 }}
            lg="4"
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 "
          >
            <CloudImage
              className="w-100 border-radius-lg shadow d-none d-lg-block"
              imageId="2023/parade_ftrcyu"
            ></CloudImage>
            <CloudImage
              className="w-100 border-radius-lg shadow d-lg-none"
              imageId="2023/paradecover_s1b5ey"
            ></CloudImage>
            <CloudImage
              className="w-100 border-radius-lg shadow d-none d-lg-block my-5"
              imageId="2023/paraderoute_lnurz1"
            ></CloudImage>
          </Col>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <p className="lead">
              On <strong>Saturday, June 17th, 2023 @ 9:00 am</strong> we are
              excited to celebrate Pride with our annual{" "}
              <strong>Pride Parade</strong> in historic Downtown Charleston!
              Whether you and your organization would like to join and walk in
              the parade, ride along in a vehicle, or create a unique themed
              float, all are welcome to take part in the festivities. If you
              have any questions about parade and float entries, please email{" "}
              <a href="mailto:parade@charlestonpride.org">
                parade@charlestonpride.org
              </a>
            </p>
            <h3 className="text-gradient text-info">Rules for the Parade</h3>
            <p>
              The person registering agrees that they have read the following
              waiver and represents the group, business or organization
              participating in the Charleston Pride Parade.
            </p>
            <ul className="text-left">
              <li>
                Floats must be secured and inspected for safety during transit.
              </li>
              <li>
                No items (including flowers, candy, beads, silly string etc.)
                may be thrown or given out from vehicles such as golf carts,
                miniature cars, motorcycles, or any other motorized vehicles.
                Candy or handouts must be given out by walkers who remain along
                the outer edge of the parade route.
              </li>
              <li>
                Groups will not purposefully stop to perform along the route;
                all participants must keep the parade moving. Gaps in the parade
                are a safety threat because they make spectators think the
                parade is over and then they begin to walk in the street.
              </li>
              <li>
                Riders on vehicles or floats cannot get on or off at any time
                during the parade.
              </li>
              <li>
                During the parade, all riders must be seated inside vehicles and
                cannot stand or ride on the hood or roof of a vehicle. Riders on
                floats must be seated unless there is a handrail available to
                safely use. Participants may ride in the back of pickup trucks,
                but the tailgate must be closed.
              </li>
              <li>
                The driver of the vehicle should be at least 18 years of age,
                possess a valid driver’s license, and have proof of current
                automobile insurance. This will include all entries including
                support vehicles such as golf carts, miniature cars,
                motorcycles, and any other motorized vehicles.
              </li>
              <li>
                All vehicles will adhere to applicable state and city laws
                regarding safe vehicle operation and will be subject to citation
                for unlawful and unsafe acts.
              </li>
              <li>
                Motorcycles cannot rev their engines. Violators will be fined.
              </li>
              <li>
                Floats must clear 6 feet below street/traffic lights. Max.
                height is 11 feet. Please take the low hanging branches
                surrounding the staging area into consideration during your
                planning process.
              </li>
              <li>
                Trash and debris must be cleaned up by your group, especially in
                the waiting areas prior to the start of the Parade.
              </li>
              <li>No nudity or inappropriate attire allowed.</li>
              <li>
                Parade participants should not engage with any protesters along
                the parade route.
              </li>
              <li>
                Parade event managers will distribute parade rules handout to
                each entry during line up of parade.
              </li>
            </ul>
            <p>
              Charleston Pride Festival Inc. is working with the city of
              Charleston, the city of Charleston Police Department, and the
              Department of Transportation to ensure the highest level of safety
              for all parade attendees and participants, while acknowledging
              road lane closures for emergencies, homeowners, and tourism. If
              any changes are made to the Parade route, applicable updates will
              be listed on Charleston Pride Festival Inc's website and on all
              social media accounts.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <CloudImage
              className="w-100 border-radius-lg shadow d-lg-none"
              imageId="2023/paraderoute_lnurz1"
            ></CloudImage>
          </Col>
        </Row>
        <Row>
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            className="mt-3"
          >
            <Entry
              title="Walking and Wheeling Entry"
              imageId="parade1_jxra2b"
              price={50}
            >
              <p>
                Get your steps in with Pride with a walking and wheeling entry
                in the parade. This entry covers up to <strong>50</strong>{" "}
                members, with a price as low as $1 per member.
              </p>
              <p>
                (Note: If you have more than 50 members, you will need to
                purchase additional walking and wheeling entries).
              </p>
            </Entry>
          </Col>
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            className="mt-3"
          >
            <Entry title="Vehicle Entry" imageId="parade_ryhqxt" price={100}>
              <p>
                Ride through in style with a vehicle entry in the parade. This
                entry covers <strong>1</strong> vehicle and up to{" "}
                <strong>5</strong> walking members.{" "}
              </p>
              <p>
                (Note: These walkers are for crowd safety and driver assistance.
                If you have more than 5 walking members, you will need to
                purchase additional walking entries).
              </p>
            </Entry>
          </Col>
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            className="mt-3"
          >
            <Entry title="Float Entry" imageId="parade7_xbzzqw" price={150}>
              <p>
                Are themed rides something your organization loves? Then the
                float entry is the option for you! This entry covers{" "}
                <strong>1</strong> float and up to
                <strong>10</strong> walking members. Get those creative minds
                working and design a fun float for your organization to ride
                through Downtown Charleston.
              </p>
              <p>
                (Note: These walkers are for crowd safety and driver assistance.
                If you have more than 10 walking members, you will need to
                purchase additional walking entries).
              </p>
            </Entry>
          </Col>
        </Row>
        {/* <Row>
          <p className="text-center lead mt-5">
            Registrations for the Pride Parade are now closed. If you have any
            questions please email{" "}
            <a href="mailto:parade@charlestonpride.org">
              parade@charlestonpride.org
            </a>
            .
          </p>
        </Row> */}
      </ExternalFrame>
    </Layout>
  );
};

export default ParadeRegistration;
