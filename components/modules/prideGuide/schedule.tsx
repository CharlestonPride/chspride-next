import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CloudImage from "../../elements/cloudImage/cloudImage";

type EventsProps = {
  events: Event[];
};

type Event = {
  id: string;
  what: string;
  when: string;
  where: string;
  description: string;
  subDescription?: string;
  imageId: string;
  links?: Link[];
  restrictions?: string;
  price?: string;
};

type Link = {
  text: string;
  url: string;
  color: string;
};

const EventCard = (event: Event) => {
  return (
    <Col md="6" lg="4">
      <div className="card card-blog card-plain">
        <div className="position-relative">
          <a className="d-block blur-shadow-image">
            <CloudImage
              imageId={event.imageId ? event.imageId : "2022/lvplxl"}
              className="img-fluid shadow border-radius-lg"
            ></CloudImage>
          </a>
        </div>
        <div className="card-body px-1 pt-3">
          <h5>{event.what}</h5>
          <p className="text-gradient text-dark mb-2 text-sm">{event.when}</p>
          {event.where && <p className="text-muted">{event.where}</p>}
          {event.restrictions && <span>{event.restrictions} </span>}
          {event.price && <span>{event.price}</span>}
          {event.description ? (
            <p>
              {event.description}{" "}
              {event.subDescription && <em>{event.subDescription}</em>}
            </p>
          ) : (
            <p>More details coming soon.</p>
          )}
        </div>
      </div>
    </Col>
  );
};

const Schedule = ({ events }: EventsProps) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center text-gradient text-primary my-3">
          <h1>Schedule of Events</h1>
        </Col>
      </Row>
      <Row>
        {events.map((event) => {
          return <EventCard {...event} key={event.id} />;
        })}
      </Row>
    </Container>
  );
};

export { Schedule };
export type { Event };
