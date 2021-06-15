import React, { ReactNode } from "react";
import { Container, Row } from "react-bootstrap";
import { ThemeColors } from "../../../types";
import WaveComponent from "../../visual/WaveComponent";

type Props = {
  children?: ReactNode | ReactNode[];
  title: string;
  color: ThemeColors;
  iframeSrc: string;
};

const ExternalFrame = ({ title, color, iframeSrc, children }: Props) => {
  return (
    <section className="pt-3 pt-md-5 pt-lg-7 pb-md-5 pb-lg-7">
      <Container fluid="lg">
        <Row>
          <div className="col-lg-10 col-12 mx-auto">
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
              <div className="card-body p-sm-5">
                {children}
                <div className="card card-frame mt-4">
                  <div className="card-body">
                    <iframe
                      title={title}
                      src={iframeSrc}
                      width="100%"
                      height="1000px"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ExternalFrame;
