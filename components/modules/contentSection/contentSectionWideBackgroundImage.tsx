import React, { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeColors } from "../../../types";
import CloudImage from "../../elements/cloudImage/cloudImage";

type Props = {
  children?: ReactNode;
  title: string;
  color: ThemeColors;
  imageSrc: string;
  imageAlt: string;
};

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 1920 157" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1920 95.443C1620.667 41.148 1300.667 45.667 960 109c-340.667 63.333-660.667 63.48-960 .443l-1-109h1920l1 95z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
};

const ContentSectionWideBackgroundImage = ({
  title,
  color,
  children,
  imageSrc,
  imageAlt,
}: Props) => {
  return (
    <div className="page-header section-height-85 my-5">
      <div className="bg-gray-200 position-absolute fixed-bottom start-0 z-index-0 h-75 mb-n7 overflow-hidden opacity-8">
        <div className="position-absolute w-100 z-index-1 top-0 mt-n3">
          <SvgComponent></SvgComponent>
        </div>
      </div>
      <div className="position-absolute fixed-top ms-auto w-75 h-75 z-index-1 d-none d-sm-block me-n2">
        <CloudImage
          className="border-radius-lg"
          imageId={imageSrc}
        ></CloudImage>
      </div>
      {children && (
        <Container>
          <Row className="mt-7">
            <Col lg="6" className="d-flex justify-content-center flex-column">
              <div className="card card-body d-flex justify-content-center shadow-lg border-radius-lg p-5 blur align-items-center z-index-2 shadow-blur">
                <h2 className={"text-gradient mb-4 text-" + color}>{title}</h2>
                <div>{children}</div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ContentSectionWideBackgroundImage;
