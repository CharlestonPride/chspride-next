import React from "react";
import Layout from "../components/elements/Layout/Layout";
import WaveComponent from "../components/visual/WaveComponent";
import { GetStaticProps } from "next";
import markdownToHtml from "../utils/markdownToHtml";
import { Container, Row, Col } from "react-bootstrap";
type Props = {
  content?: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await markdownToHtml("bylaws");
  return { props: { content } };
};

const Bylaws = ({ content }: Props) => {
  return (
    <Layout title="Charleston Pride Bylaws">
      <div className="pt-3 pt-md-5 pt-lg-7 pb-md-5 pb-lg-7">
        <Container fluid="lg">
          <Row>
            <Col lg="10" className="mx-auto">
              <div className="card shadow-lg">
                <div className="card-header p-5 position-relative bg-gradient-success">
                  <h1 className="text-white mb-0">Bylaws</h1>
                  <div className="position-absolute w-100 z-index-1 ms-n5">
                    <WaveComponent />
                  </div>
                </div>
                <div className="card-body p-sm-5 pt-0 opacity-8">
                  <div className="card card-frame mt-4">
                    <div className="card-body">
                      <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Bylaws;
