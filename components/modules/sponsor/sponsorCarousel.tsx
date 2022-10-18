import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { SponsorLevels } from "../../../types";
import { Image, Transformation } from "cloudinary-react";

type SponsorProps = {
  label: string;
  level: SponsorLevels;
};

const Sponsor = ({ label, level }: SponsorProps) => {
  const src = "https://chaspride.blob.core.windows.net/sponsors/" + label;
  return (
    <div className={"text-center pb-2 sponsor-card sponsor-card-" + level}>
      <img src={src} className="img-fluid" />
    </div>
  );
};

const SponsorCarousel = () => {
  const carouselStyle = {
    width: `100%`,
  };

  return (
    <Container>
      <Row className="align-items-end">
        <Col>
          <Sponsor label="blackbaud_Gray.png" level="yellow" />
        </Col>
        <Col>
          <Sponsor
            label="Pet%20Supplies%20Plus%20Left%20Aligned.jpg"
            level="green"
          />
        </Col>
        <Col>
          <Sponsor label="Palmetto%20Community%20Care.png" level="green" />
        </Col>
      </Row>
      <Row className="align-items-end">
        <Col>
          <Sponsor label="musc.png" level="blue" />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default SponsorCarousel;
