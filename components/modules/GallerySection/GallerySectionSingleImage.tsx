import React from "react";
import { Container, Row, Col } from "react-bootstrap";

type GalleryItem = {
  src: string;
  alt: string;
};

const GallerySectionSingleImage = ({ src, alt }: GalleryItem) => {
  return (
    <Container className="my-3">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <div className="card ">
            <img className="card-img" src={src} alt={alt} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionSingleImage;
