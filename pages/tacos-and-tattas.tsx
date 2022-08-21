import {
  faCalculator,
  faCalendarDay,
  faCheck,
  faClock,
  faCrown,
  faMapLocation,
  faMapPin,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import CloudImage from "../components/elements/cloudImage/cloudImage";
import Layout from "../components/elements/layout/layout";
import ExternalFrame from "../components/modules/externalFrame/externalFrame";

const Tacos = () => {
  return (
    <Layout title="Taco Boy Taco's and Tattas">
      <ExternalFrame
        title="Taco Boy Taco's and Tattas"
        color="warning"
        iframeSrc="https://registration.planningpod.com?ssid=NTkwMzMx"
        iframeHeight="2000px"
      >
        <Row>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <h1 className="text-gradient text-warning">
              Taco Boy Taco's and Tattas
            </h1>
            <h2>21+</h2>
            <p className="lead">
              Join Charleston Pride and the greater Nexton/Summerville community
              for a night of fun with the local LGBTQIA+ community. Drag show,
              drink specials and dance party with many more surprises in store!
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faMapPin} className="me-2" /> Taco Boy @
                Nexton (106 Front St, Summerville)
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCalendarDay} className="me-2" />{" "}
                Saturday 9/24
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faClock} className="me-2" /> Doors @ 830;
                Show @ 10
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCrown} className="me-2" /> Performances
                by: <strong>Ava Clear</strong> (host),{" "}
                <strong>Diamond Giovanni</strong> (Empress of Charleston 2019),{" "}
                <strong>Beau O’ Bishop</strong> (Emperor of Charleston Pride
                2019), <strong>Mercy Madison</strong>, and{" "}
                <strong>Kymmya Starr</strong>
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faTicket} className="me-2" />
                <strong>21+</strong>, $10 includes complementary Special Pride
                Cocktail
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
              imageId="sponsor/tacoboy"
            ></CloudImage>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Tacos;
