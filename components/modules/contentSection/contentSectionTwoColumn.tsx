import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Focus, Orientation } from "../../../types";
import CloudImage from "../../elements/cloudImage/cloudImage";
import { Content, ContentProps } from "./contentSectionCore";

type Props = ContentProps & {
  imageSrc: string;
  orientation: Orientation;
  focusContent?: boolean;
  disableShadow?: boolean;
};

const ContentSectionTwoColumn = (props: Props) => {
  let imgClass = props.disableShadow
    ? "w-100"
    : "w-100 border-radius-lg shadow";
  if (props.orientation == Orientation.Left) {
    return (
      <Container className="my-5">
        <Row>
          <Col
            xs="10"
            lg={props.focusContent ? 6 : 4}
            className="mx-auto py-5 text-lg-left text-center"
          >
            <Content {...props} />
          </Col>
          <Col
            xs="10"
            lg={props.focusContent ? 4 : 6}
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto"
          >
            <CloudImage
              className={imgClass}
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
            lg={props.focusContent ? 4 : 6}
            className="mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto"
          >
            <CloudImage
              className={imgClass}
              imageId={props.imageSrc}
            ></CloudImage>
          </Col>
          <Col
            xs="10"
            lg={props.focusContent ? 6 : 4}
            className="mx-auto py-5 text-lg-left text-center"
          >
            <Content {...props} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ContentSectionTwoColumn;
