import React from "react";
import { Col, ColProps, Container, Row } from "react-bootstrap";
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
  order: number;
};

function getColProps(order: number): ColProps {
  if (order === 1) {
    return { xs: "12", md: "6", lg: "4" };
  } else if (order === 2) {
    return { md: "6", lg: "4" };
  }
  return {
    lg: "4",
  };
}

function getImageClass(order: number): string {
  if (order === 1) {
    return "img-fluid border-radius-lg shadow";
  }
  if (order === 2) {
    return "d-md-block d-none img-fluid border-radius-lg shadow";
  }
  return "d-lg-block d-none img-fluid border-radius-lg shadow";
}

const GallerySectionTripleImages = ({ itemA, itemB, itemC, color }: Props) => {
  return (
    <Container>
      <Row className={"py-2 border-radius-xl bg-gradient-" + color}>
        <Col {...getColProps(itemA.order)}>
          <CloudImage
            className={getImageClass(itemA.order)}
            imageId={itemA.src}
          ></CloudImage>
        </Col>
        <Col {...getColProps(itemB.order)}>
          <CloudImage
            className={getImageClass(itemB.order)}
            imageId={itemB.src}
          ></CloudImage>
        </Col>
        <Col {...getColProps(itemC.order)}>
          <CloudImage
            className={getImageClass(itemC.order)}
            imageId={itemC.src}
          ></CloudImage>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionTripleImages;
