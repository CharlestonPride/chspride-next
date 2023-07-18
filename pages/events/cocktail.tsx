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

const Cocktail = () => {
  return (
    <Layout title="Drag Queen Cocktail Making Class">
      <ExternalFrame
        title="Drag Queen Cocktail Making Class"
        color="primary"
        iframeSrc="https://registration.planningpod.com/?ssid=ODE4NzY2"
        iframeHeight="2000px"
      >
        <Row>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <h1 className="text-gradient text-primary">
              Drag Queen Cocktail Making Class
            </h1>
            <p className="lead">
              Join Charleston Pride for the newest event in the area! Join Drag
              Entertainers Crystal Gem & Bunny Monroe for a Cocktail making
              class sponsored by Chambord and Huerradura Tequila!
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faMapPin} className="me-2" /> Bodega
                Charleston
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCalendarDay} className="me-2" />{" "}
                Wednesday, July 26, 2023
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                6-8 pm
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
              imageId="Cocktail_Making_Class_uxfdsp"
            ></CloudImage>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Cocktail;
