import {
  faCalendarDay,
  faClock,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col } from "react-bootstrap";
import CloudImage from "../../components/elements/cloudImage/cloudImage";
import Layout from "../../components/elements/layout/layout";
import ExternalFrame from "../../components/modules/externalFrame/externalFrame";

const Pageant = () => {
  return (
    <Layout title="Charleston Pride Pageant">
      <ExternalFrame
        title="Charleston Pride Pageant"
        color="primary"
        iframeSrc="https://registration.planningpod.com?ssid=ODExMjU0"
        iframeHeight="2000px"
      >
        <Row>
          <Col xs="10" lg="6" className="mx-auto py-5 text-lg-left text-center">
            <h1 className="text-gradient text-primary">
              Charleston Pride Pageant
            </h1>
            <p className="lead">
              The <strong>Charleston Pride Pageant</strong> is back! On
              September 14th at the Music Farm. For more information regarding
              Pageant Contestant Rules & Regulations, please email us at{" "}
              <a href="mailto:info@charlestonpride.org">
                info@charlestonpride.org
              </a>
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <FontAwesomeIcon icon={faMapPin} className="me-2" /> Music Farm
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faCalendarDay} className="me-2" /> Friday
                September 14, 2023
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faClock} className="me-2" />
                VIP Early Entry - 7:00pm, General Admission - 8:00pm
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
              imageId="2wzxnc59vwmz-pageant_ovqxue"
            ></CloudImage>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Pageant;
