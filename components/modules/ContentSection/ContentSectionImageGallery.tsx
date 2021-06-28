import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Content, ContentProps } from "./ContentSectionCore";

type Props = ContentProps & {
  items: GalleryItem[];
};

type GalleryItem = {
  src: string;
  alt: string;
};

const ContentSectionImageGallery = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col xs="6" lg="4" className="my-auto">
          <Content {...props}></Content>
        </Col>
        <Col xs="6" className="d-block d-lg-none">
          <img className="img-fluid shadow" {...props.items[0]}></img>
        </Col>
        <Col lg="8" className="ps-5 pe-0 d-none d-lg-block">
          <Row className={"p-2 border-radius-xl bg-gradient-" + props.color}>
            <Col xs="6" lg="3">
              <img
                className="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                {...props.items[0]}
              ></img>
            </Col>
            <Col xs="6" lg="3">
              <img
                className="w-100 border-radius-lg shadow"
                {...props.items[1]}
              ></img>
              <img
                className="w-100 border-radius-lg shadow mt-4"
                {...props.items[2]}
              ></img>
            </Col>
            <Col xs="6" lg="3">
              <img
                className="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                {...props.items[3]}
              ></img>
              <img
                className="w-100 border-radius-lg shadow mt-4"
                {...props.items[4]}
              ></img>
            </Col>
            <Col xs="6" lg="3">
              <img
                className="w-100 border-radius-lg shadow mt-3"
                {...props.items[5]}
              ></img>
              <img
                className="w-100 border-radius-lg shadow mt-4"
                {...props.items[6]}
              ></img>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentSectionImageGallery;
