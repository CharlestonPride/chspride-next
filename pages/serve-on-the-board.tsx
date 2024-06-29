import React from "react";
import Layout from "../components/elements/layout/layout";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import WaveComponent from "../components/visual/waveComponent";


const Application = ({ enabled, disabledMessage }) => {
  if (enabled) {
    return (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScbBqRFiax63FW3t_1toWWZaedKDDOCusB7aOwcgPvz-Ao-SQ/viewform?embedded=true"
        height="1100"
        width="100%"
      />
    );
  }
  return <div className="text-center">{disabledMessage}</div>;
};

const ServeOnTheBoard = ({
  title = "Serve on the Board of Directors",
  color = "warning",
  disabledMessage = "We are not accepting applications at this time",
  enabled = true,
}) => {
  return (
    <Layout
      title="Serve on the Charleston Pride Board of Directors"
      description="Apply to serve on the Charleston Pride Board of Directors"
    >
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
                  <p className="lead">
                    The Charleston Pride Board of Directors is ultimately
                    responsible for the planning and execution of Charleston
                    Pride Week, including but not limited to the Parade and
                    Festival. As a member of the board, you will work with other
                    board members to plan various fundraising events throughout
                    the year; engage sponsors and community members; and plan
                    and execute Pride Week events.
                  </p>
                  <p className="lead">
                    As specified in the <Link href="/bylaws">bylaws</Link>, the
                    Board of Directors includes the following permanent members:
                    Chairperson, Vice-chairperson, Treasurer, Secretary,
                    Director of Sponsorships, Festival Director, Director of
                    Communications, and Director of Outreach. The Board may
                    designate other board members as directors of various
                    jurisdictions. The Board may allow some members to serve as
                    members-at-large.
                  </p>

                  <p className="lead">
                    To apply to serve on the board, fill out the form below.
                    Applicants should familiarize themselves with the{" "}
                    <Link href="/bylaws">bylaws</Link>.
                  </p>
                  <div className="card card-frame mt-2 d-none d-lg-block">
                    <div className="card-body">
                      <Application enabled={enabled} disabledMessage={disabledMessage} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-lg-none">
          <div className="card mt-2 shadow-lg">
            <Application enabled={enabled} disabledMessage={disabledMessage} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServeOnTheBoard;
