import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InferGetStaticPropsType } from "next";
import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import CloudImage from "../components/elements/CloudImage/CloudImage";
import Layout from "../components/elements/Layout/Layout";
import ObliqueHeader from "../components/modules/Header/ObliqueHeader";

const headerStyle = {
  backgroundImage: `url(https://res.cloudinary.com/charlestonpride-org/image/upload/v1625021244/rainbow_qi42lu.jpg)`,
};

type Board = {
  executives: Member[];
  members: Member[];
};

type Member = {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  executive: boolean;
  image: string;
  dateElected: string;
  dateElectedToBoard: string;
  pronouns: string;
  bio: string[];
};

const Headshot = (memberData: Member) => {
  if (memberData.image) {
    return (
      <div className="position-relative">
        <div className="blur-shadow-image">
          <CloudImage
            imageId={"/board/" + memberData.image}
            className="w-100 rounded-3 shadow-lg"
          ></CloudImage>
        </div>
      </div>
    );
  }
  return (
    <Card className="bg-cover text-center">
      <Card.Body className="z-index-2 py-8">
        <h2>
          {memberData.firstName.charAt(0).toUpperCase() +
            memberData.lastName.charAt(0).toUpperCase()}
          <p>Coming Soon</p>
        </h2>
      </Card.Body>
    </Card>
  );
};

const BoardMember = (memberData: Member) => {
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
                      {memberData.firstName + " " + memberData.lastName}
                    </h5>

                    <p className="text-uppercase font-weight-bold mb-0">
                      {memberData.title}
                    </p>
                    <p>
                      <em className="text-sm">{memberData.pronouns}</em>
                    </p>
                    <div className="d-md-none">
                      <Button
                        variant="info"
                        className="me-2"
                        href={
                          "mailto:" + memberData.id + "@charlestonpride.org"
                        }
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
                      href={"mailto:" + memberData.id + "@charlestonpride.org"}
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
          <Modal.Title>{"About " + memberData.firstName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Elected to Position: </strong>
            {memberData.dateElected}
          </p>
          <p>
            <strong>Served on Board Since: </strong>
            {memberData.dateElectedToBoard}
          </p>
          {memberData.bio.map((b) => (
            <p key={b}>{b}</p>
          ))}
          {!memberData.bio.length && <p>Bio coming soon.</p>}
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

function OurTeam({ board }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Our Team"
      description="The Charleston Pride Board of Directors &amp; Staff"
    >
      <ObliqueHeader style={headerStyle}>
        <h1 className="text-gradient text-primary">Our Team</h1>
        <h1>
          Charleston Pride is brought to you by a group of dedicated volunteers
        </h1>
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
          {board.executives.map((boardMember) => {
            return <BoardMember {...boardMember} key={boardMember.id} />;
          })}
        </Row>
        <Row>
          <Col className="mx-auto text-center mb-5">
            <h2 className="text-gradient text-info">The Board Members</h2>
          </Col>
        </Row>
        <Row>
          {board.members.map((boardMember) => {
            return <BoardMember {...boardMember} key={boardMember.id} />;
          })}
        </Row>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://chspride-api.azurewebsites.net/api/directors"
  );
  const board: Board = await res.json();

  return {
    props: {
      board,
    },
  };
};

export default OurTeam;
