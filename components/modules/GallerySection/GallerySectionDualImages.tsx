import React from "react";
import { Container } from "react-bootstrap";

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
        <div className="row mt-5">
          <div className="col-md-7 position-relative">
            <div className="position-relative ms-md-5 me-md-n5">
              <img
                className="image-left rounded-3 img-fluid position-relative top-0 end-0 bg-cover"
                {...itemA}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="position-relative ms-n6 mb-2 mt-3 d-md-block d-none">
              <img
                className="image-right rounded-3 img-fluid position-relative bg-cover"
                {...itemB}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <div className="row mt-5">
        <div className="col-md-6 position-relative">
          <div className="position-relative ms-md-5 me-md-n5">
            <img
              className="image-left rounded-3 img-fluid position-relative top-0 end-0 bg-cover"
              {...itemA}
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
            <img
              className="image-right rounded-3 img-fluid position-relative bg-cover"
              {...itemB}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GallerySectionDualImage;
