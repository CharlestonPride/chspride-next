import React from "react";
import { Orientation } from "../../../types";
import { Content, ContentProps } from "./ContentSectionCore";
import { Container, Row, Col } from "react-bootstrap";
import CloudImage from "../../elements/CloudImage/CloudImage";

type Props = ContentProps & {
  imageSrc: string;
  orientation?: Orientation;
};

const ContentSectionStackedImage = (props: Props) => {
  if (props.orientation == Orientation.Left) {
    return (
      <Container className="my-5 mb-lg-10">
        <Row>
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 8, order: 2 }}
            lg={{ span: 6, order: 1 }}
          >
            <div className="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-lg-block h-75">
              <div
                className={
                  "w-100 h-100 border-radius-xl position-absolute bg-gradient-" +
                  props.color
                }
              ></div>
              <CloudImage
                imageId={props.imageSrc}
                className="w-100 border-radius-xl mt-6 ms-5 position-absolute"
              />
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 12, order: 1 }}
            lg={{ span: 5, order: 1 }}
            className="ms-auto"
          >
            <div className="p-3 pt-0">
              <Content {...props} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="my-5 mb-lg-7">
        <Row>
          <Col md="12" lg="5" className="me-auto">
            <div className="p-3 pt-0">
              <Content {...props} />
            </div>
          </Col>
          <Col md="8" lg="6">
            <div className="position-relative ms-md-5 d-none d-lg-block h-75">
              <div
                className={
                  "w-100 h-100 border-radius-xl position-absolute bg-gradient-" +
                  props.color
                }
              ></div>
              <CloudImage
                imageId={props.imageSrc}
                className="w-100 border-radius-xl mt-6 ms-n5 position-absolute"
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ContentSectionStackedImage;
