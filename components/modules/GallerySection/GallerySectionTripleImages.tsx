import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeColors } from "../../../types";
import CloudImage from "../../elements/CloudImage/CloudImage";

type Props = {
  itemA: GalleryItem;
  itemB: GalleryItem;
  itemC: GalleryItem;
  color: ThemeColors;
};

type GalleryItem = {
  src: string;
  alt: string;
};

const GallerySectionTripleImages = ({ itemA, itemB, itemC, color }: Props) => {
  return (
    <Container>
      <Row className={"py-2 border-radius-xl bg-gradient-" + color}>
        <Col xs="12" md="6" lg="4">
          <CloudImage
            className="img-fluid border-radius-lg shadow"
            imageId={itemA.src}
          ></CloudImage>
        </Col>
        <Col md="6" lg="4">
          <CloudImage
            className="d-md-block d-none img-fluid border-radius-lg shadow"
            imageId={itemB.src}
          ></CloudImage>
        </Col>
        <Col lg="4">
          <CloudImage
            className="d-lg-block d-none img-fluid border-radius-lg shadow"
            imageId={itemC.src}
          ></CloudImage>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionTripleImages;
