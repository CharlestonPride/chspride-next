import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Orientation } from "../../../types";
import CloudImage from "../../elements/CloudImage/CloudImage";
import { Content, ContentProps } from "./ContentSectionCore";

type Props = ContentProps & {
  imageSrc: string;
  imageAlt: string;
  orientation: Orientation;
};

const ContentSectionTwoColumn = (props: Props) => {
  if (props.orientation == Orientation.Left) {
    return (
      <Container className="my-5">
        <Row>
          <Col xs="10" lg="4" className="mx-auto py-5 text-lg-left text-center">
            <Content {...props} />
          </Col>
          <Col
            xs="12"
            lg="6"
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto"
          >
            <CloudImage
              className="w-100 border-radius-lg shadow"
              imageId={props.imageSrc}
            ></CloudImage>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="my-5">
        <Row>
          <Col
            xs="10"
            lg="6"
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto"
          >
            <CloudImage
              className="w-100 border-radius-lg shadow"
              imageId={props.imageSrc}
            ></CloudImage>
          </Col>
          <Col xs="10" lg="4" className="mx-auto py-5 text-lg-left text-center">
            <Content {...props} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ContentSectionTwoColumn;
