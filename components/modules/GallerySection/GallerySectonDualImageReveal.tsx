import { Col, Container, Row } from "react-bootstrap";
import CloudImage from "../../elements/CloudImage/CloudImage";

type Props = {
  itemA: GalleryItem;
  itemB: GalleryItem;
  itemC: GalleryItem;
};

type GalleryItem = {
  src: string;
  alt: string;
};

const GallerySectionDualImageReveal = ({ itemA, itemB, itemC }: Props) => {
  return (
    <Container>
      <Row className="mt-5">
        <Col lg="6">
          <CloudImage
            className="d-lg-block d-none img-fluid border-radius-lg shadow"
            imageId={itemA.src}
          ></CloudImage>
        </Col>
        <Col lg="6">
          <CloudImage
            className="d-lg-block d-none img-fluid border-radius-lg shadow"
            imageId={itemB.src}
          ></CloudImage>
        </Col>
        <Col xs="12" md={false}>
          <CloudImage
            className="img-fluid border-radius-lg shadow d-lg-none"
            imageId={itemC.src}
          ></CloudImage>
        </Col>
      </Row>
    </Container>
  );
};

export default GallerySectionDualImageReveal;
