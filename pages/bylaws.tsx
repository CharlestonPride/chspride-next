import React from "react";
import Layout from "../components/elements/layout/layout";
import WaveComponent from "../components/visual/waveComponent";
import { Container, Row, Col } from "react-bootstrap";
import { getPage } from "../lib/prepr";
import { InferGetStaticPropsType } from "next";

const Bylaws = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title={page.title}>
      <div className="pt-3 pt-md-5 pt-lg-7 pb-md-5 pb-lg-7">
        <Container fluid="lg">
          <Row>
            <Col lg="10" className="mx-auto">
              <div className="card shadow-lg">
                <div className="card-header p-5 position-relative bg-gradient-success">
                  <h1 className="text-white mb-0">{page.title}</h1>
                  <div className="position-absolute w-100 z-index-1 ms-n5">
                    <WaveComponent />
                  </div>
                </div>
                <div className="card-body p-sm-5 pt-0 opacity-8">
                  <div className="card card-frame mt-4">
                    <div className="card-body">
      
                        {page.content.map((content) => {
                          return <span dangerouslySetInnerHTML={{__html: content.body}}></span>
        
                        })}
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

export async function getStaticProps() {
  const page = await getPage('88816545-7eb9-40f9-b590-bb939fb2dca0');
  return {
    props: { page },
  };
}
export default Bylaws;
