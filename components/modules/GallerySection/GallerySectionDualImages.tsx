import React from "react";
import { Container, Row, Col } from "react-bootstrap";

type Props = {
  itemA: GalleryItem;
  itemB: GalleryItem;
  variant: number;
};

type GalleryItem = {
  src: string;
  alt: string;
};

const GallerySectionDualImage = ({ itemA, itemB, variant }: Props) => {
  if (variant === 2) {
    return (
      <Container>
        <Row className="mt-5">
          <Col md="7" className="position-relative">
            <div className="position-relative ms-md-5 me-md-n5">
              <img
                className="image-left rounded-3 img-fluid position-relative top-0 end-0 bg-cover"
                {...itemA}
              />
            </div>
          </Col>
          <Col md="5">
            <div className="position-relative ms-n6 mb-2 mt-3 d-md-block d-none">
              <img
                className="image-right rounded-3 img-fluid position-relative bg-cover"
                {...itemB}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col md="6" className="position-relative">
          <div className="position-relative ms-md-5 me-md-n5">
            <img
              className="image-left rounded-3 img-fluid position-relative top-0 end-0 bg-cover"
              {...itemA}
            />
          </div>
        </Col>
        <Col md="5">
          <div className="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
            <img
              className="image-right rounded-3 img-fluid position-relative bg-cover"
              {...itemB}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionDualImage;
