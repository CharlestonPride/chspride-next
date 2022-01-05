import React, { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeColors } from "../../../types";
import WaveComponent from "../../visual/WaveComponent";

type Props = {
  children?: ReactNode | ReactNode[];
  title: string;
  color: ThemeColors;
  iframeSrc: string;
  iframeHeight?: string;
  enabled?: boolean;
  disabledMessage?: string;
};

const ExternalFrame = ({
  title,
  color,
  iframeSrc,
  children,
  disabledMessage = "",
  enabled = true,
  iframeHeight = "1000px",
}: Props) => {
  return (
    <section className="pt-3 pt-md-5 pt-lg-7 pb-md-5 pb-lg-7">
      <div>
        <Row>
          <Col lg="10" className="mx-auto">
            <div className="card shadow-lg">
              <div
                className={
                  "card-header p-5 position-relative bg-gradient-" + color
                }
              >
                <h3 className="text-white mb-0">{title}</h3>
                <div className="position-absolute w-100 z-index-1 ms-n5">
                  <WaveComponent />
                </div>
              </div>
              <div className="card-body p-sm-5 ">
                {children}
                <div className="card card-frame mt-2 d-none d-lg-block">
                  <div className="card-body">
                    {enabled && (
                      <iframe
                        title={title}
                        src={iframeSrc}
                        width="100%"
                        height={iframeHeight}
                      ></iframe>
                    )}
                    {!enabled && disabledMessage && (
                      <h4 className="text-center">{disabledMessage}</h4>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="d-lg-none">
        <div className="card mt-2 shadow-lg">
          {enabled && (
            <iframe
              title={title}
              src={iframeSrc}
              width="100%"
              height={iframeHeight}
            ></iframe>
          )}
          {!enabled && disabledMessage && (
            <h4 className="text-center">{disabledMessage}</h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExternalFrame;
