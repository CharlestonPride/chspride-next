import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ThemeColors } from "../../../types";

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
          <img className="img-fluid border-radius-lg shadow" {...itemA}></img>
        </Col>
        <Col md="6" lg="4">
          <img
            className="d-md-block d-none img-fluid border-radius-lg shadow"
            {...itemB}
          ></img>
        </Col>
        <Col lg="4">
          <img
            className="d-lg-block d-none img-fluid border-radius-lg shadow"
            {...itemC}
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionTripleImages;
