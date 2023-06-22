import {
  faMapPin,
  faCalendarDay,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import CloudImage from "../../components/elements/cloudImage/cloudImage";
import Layout from "../../components/elements/layout/layout";
import ExternalFrame from "../../components/modules/externalFrame/externalFrame";

const Kaleidoscope = () => {
  return (
    <Layout
      title="Kaleidoscope"
      description="Rave with Pride | Friday July 21 @9pm | Feat. DJ REHAB"
      imageUrl="https://res.cloudinary.com/charlestonpride-org/image/upload/v1687460464/2023/Kaleidoscope_iw5hq8h.png"
    >
      <ExternalFrame
        title=""
        color="primary"
        iframeSrc="https://registration.planningpod.com?ssid=ODA2Mzg4"
        iframeHeight="2000px"
      >
        <Row>
          <Col xl="6" className="mx-auto py-5 text-lg-left text-center">
            <h1 className="text-gradient text-primary">Kaleidoscope</h1>
            <h2>Rave with Pride</h2>
            <h3>21+</h3>
            <p className="lead">
              Charleston Pride is excited to announce Kaleidoscope: Rave with
              Charleston Pride. This event is an EDM Rave/glow party on July
              21st. We are looking forward to hosting at 3353 Rivers Ave, North
              Charleston 29405 from 9 PM - 12 AM. Music is provided by Rehab
              Events and DJ Rehab. Bring your friends, your best rave gear, glow
              paint, and let's party! This event is 21+ as we will be serving
              drinks all night long.
            </p>
            <p className="lead">
              We will have some vendors on hand to help in your rave gear supply
              as well a coat check option when you come in! We can't wait to see
              you there!
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faMapPin} className="me-2" /> HKBalloons
                @ 3353 Rivers Ave, North Charleston
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCalendarDay} className="me-2" />{" "}
                Friday, July 21
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faClock} className="me-2" /> 9:00pm -
                12:00am
              </li>
            </ul>
          </Col>
          <Col xl="4" className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <CloudImage
              className="w-100 "
              imageId="2023/Kaleidoscope_iw5hq8h"
            ></CloudImage>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Kaleidoscope;
