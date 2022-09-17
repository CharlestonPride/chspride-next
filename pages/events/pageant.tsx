import {
  faCalendarDay,
  faClock,
  faCrown,
  faListCheck,
  faMapPin,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import CloudImage from "../../components/elements/cloudImage/cloudImage";
import Layout from "../../components/elements/layout/layout";
import ExternalFrame from "../../components/modules/externalFrame/externalFrame";

const Pageant = () => {
  return (
    <Layout title="Charleston Pride Pageant: Renaissance Ball">
      <ExternalFrame
        title="Charleston Pride Pageant:
              Renaissance Ball"
        color="primary"
        iframeSrc="https://registration.planningpod.com/?ssid=NjA0ODMx"
        iframeHeight="2000px"
      >
        <Row>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <h1 className="text-gradient text-primary">
              Charleston Pride Pageant: Renaissance Ball
            </h1>
            <p className="lead">
              We are now inviting guests for the{" "}
              <strong>Charleston Pride Pageant: Renaissance Ball</strong>
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faMapPin} className="me-2" /> The Hive
                9422 US-78, Ladson, SC 29456
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCalendarDay} className="me-2" /> Friday
                October 7, 2022
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                Doors - 8:00pm, Show - 9:00pm - 11:30pm/12am
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faListCheck} className="me-2" />
                Categories included are Presentation in theme of Renaissance,
                Talent, Formal Wear with onstage Q and A.
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCrown} className="me-2" /> Celebrating{" "}
                <strong>Beau O’Bishop</strong> and{" "}
                <strong>Diamond Giovanni</strong> - Emperor and Empress of
                Charleston Pride 2019.
              </li>
            </ul>
          </Col>
          <Col
            xs={{ span: 8, offset: 2 }}
            lg="4"
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto"
          >
            <CloudImage
              className="w-100 "
              imageId="sponsor/hive_hfcvo0"
            ></CloudImage>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Pageant;
