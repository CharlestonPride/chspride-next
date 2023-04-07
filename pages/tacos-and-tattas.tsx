import {
  faCalendarDay,
  faClock,
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
    <Layout
      title="Taco's & Tattas 2.0 | The Yellow Party | Tacoboy @ Nexton!"
      description="Featuring the 2022 Charleston Pride Royal Court | Saturday April 29 @ 9:30PM"
      imageUrl="https://res.cloudinary.com/charlestonpride-org/image/upload/v1680832783/2023/TACO_BOY_rtaozg.png"
    >
      <ExternalFrame
        title=""
        color="warning"
        iframeSrc="https://registration.planningpod.com?ssid=NzQ1NDMy"
        iframeHeight="2000px"
      >
        <Row>
          <Col xl="6" className="mx-auto py-5 text-lg-left text-center">
            <h1 className="text-gradient text-warning">Tacos & Tattas 2.0</h1>
            <h2>The Yellow Party</h2>
            <h3>18+</h3>
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
                Saturday, April 29
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faClock} className="me-2" /> Doors @
                9:30pm; Show @ 10:00pm
              </li>
              <li className="list-group-item">
                <FontAwesomeIcon icon={faTicket} className="me-2" />
                <strong>18-20</strong>: $15 | <strong>21+</strong>: $10 includes
                complementary Special Pride Cocktail
              </li>
            </ul>
          </Col>
          <Col xl="4" className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <CloudImage
              className="w-100 "
              imageId="2023/TACO_BOY_o1y9ba"
            ></CloudImage>
          </Col>
        </Row>
      </ExternalFrame>
    </Layout>
  );
};

export default Tacos;
