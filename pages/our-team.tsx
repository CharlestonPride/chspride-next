import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import Layout from "../components/elements/layout/layout";
import ObliqueHeader from "../components/modules/header/obliqueHeader";
import { TeamMember, getTeamMembersPage } from "../lib/prepr";

const headerStyle = {
  backgroundImage: `url(https://charleston-pride.stream.prepr.io//2opkhhj72erl-rainbow-qi42lu.jpg)`,
};

const Headshot = (memberData: TeamMember) => {
  if (memberData.profile_pic?.length) {
    return (
      <div className="position-relative">
        <div className="blur-shadow-image">
          <img
            src={memberData.profile_pic[0].url}
            className="w-100 rounded-3 shadow-lg"
          ></img>
        </div>
      </div>
    );
  }
  return (
    <Card className="bg-cover text-center">
      <Card.Body className="z-index-2 py-8">
        <h2>
          {getInitials(memberData)}
          <p>Coming Soon</p>
        </h2>
      </Card.Body>
    </Card>
  );
};

const getInitials = (teamMember: TeamMember) => {
  let name = teamMember.email.split("@")[0].split(".");
  return name[0][0].toUpperCase() + name[1][0].toUpperCase();
};

const formatPronouns = (teamMember: TeamMember) => {
  return [teamMember.subjective, teamMember.objective, teamMember.possessive]
    .filter((p) => p)
    .map((p) => titleCase(p))
    .join("/");
};

const titleCase = (word: string) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

const BoardMember = (memberData: TeamMember) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col lg="6" className="my-5">
        <Card className="card-profile card-plain">
          <Row>
            <Col xs={{ span: 6, offset: 3 }} sm={{ span: 5, offset: 0 }}>
              <Headshot {...memberData} />
            </Col>
            <Col xs="12" sm="7">
              <Card.Body className="h-100 pt-lg-5 pb-0">
                <div className="d-flex flex-column align-items-start h-100">
                  <div className="mb-auto">
                    <h5 className="font-weight-bolder mb-0">
                      {memberData.full_name}
                    </h5>

                    <p className="text-uppercase font-weight-bold mb-0">
                      {memberData.title}
                    </p>
                    <p>
                      <em className="text-sm">{formatPronouns(memberData)}</em>
                    </p>
                    <div className="d-md-none">
                      <Button
                        variant="info"
                        className="me-2"
                        href={"mailto:" + memberData.email}
                      >
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                      </Button>
                      <Button variant="outline-info" onClick={handleShow}>
                        Bio
                      </Button>
                    </div>
                  </div>
                  <div className="d-none d-md-block">
                    <Button
                      variant="info"
                      className="me-2"
                      href={"mailto:" + memberData.email}
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    </Button>
                    <Button variant="outline-info" onClick={handleShow}>
                      Bio
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{"About " + memberData.full_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {memberData.bio?.split(/\r?\n/).map((b) => (
            <p key={b}>{b}</p>
          ))}
          {!memberData.bio?.length && <p>Bio coming soon.</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

function OurTeam({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={page.title} description={page.description}>
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-primary">{page.title}</h1>
        <h1>{page.description}</h1>
      </ObliqueHeader>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Board of Directors</h1>
            <p className="lead">
              The Charleston Pride Board of Directors is ultimately responsible
              for the planning and execution of Charleston Pride Week, including
              but not limited to the Parade and Festival.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto text-center mb-5">
            <h2 className="text-gradient text-info">The Executive Committee</h2>
          </Col>
        </Row>
        <Row>
          {page.executive_committee.map((teamMember, index) => {
            return <BoardMember {...teamMember} key={index} />;
          })}
        </Row>
        <Row>
          <Col className="mx-auto text-center mb-5">
            <h2 className="text-gradient text-info">The Board Members</h2>
          </Col>
        </Row>
        <Row>
          {page.board_members.map((teamMember, index) => {
            return <BoardMember {...teamMember} key={index} />;
          })}
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const page = await getTeamMembersPage(preview);

  return {
    props: { page },
  };
}

export default OurTeam;
