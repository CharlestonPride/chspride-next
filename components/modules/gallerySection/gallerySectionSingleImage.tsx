import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CloudImage from "../../elements/cloudImage/cloudImage";

type GalleryItem = {
  src: string;
};

const GallerySectionSingleImage = ({ src }: GalleryItem) => {
  return (
    <Container className="my-3">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <div className="card ">
            <CloudImage className="card-img" imageId={src}></CloudImage>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionSingleImage;
