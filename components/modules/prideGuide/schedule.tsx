import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { LinkButton } from "../../elements/button/button";
import CloudImage from "../../elements/cloudImage/cloudImage";

type EventsProps = {
  events: Event[];
};

type Event = {
  id: string;
  what: string;
  when: string;
  where: string;
  address: string;
  description: string;
  subDescription?: string;
  imageId: string;
  links?: Link[];
  restrictions?: string;
  price?: string;
  vip?: string[];
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
          <h5 className="text-gradient text-dark">{event.when}</h5>
          <h4 className="text-muted">{event.where}</h4>
          <span className="text-muted">{event.address}</span>
          <h3>{event.what}</h3>
          {event.restrictions && (
            <span className="badge badge-warning me-1">
              {event.restrictions}{" "}
            </span>
          )}
          {event.price && (
            <span className="badge badge-info">{event.price}</span>
          )}
          {event.description ? (
            <>
              <p>{event.description} </p>
              {event.subDescription && (
                <p>
                  <em>{event.subDescription}</em>
                </p>
              )}
            </>
          ) : (
            <p>More details coming soon.</p>
          )}
          <Vip {...event} />
          {event.links.map((link) => (
            <LinkButton color="primary" href={link.url}>
              {link.text}
            </LinkButton>
          ))}
        </div>
      </div>
    </Col>
  );
};

const Vip = (event: Event) => {
  if (event.vip && event.vip.length) {
    return (
      <div>
        VIP Includes:
        <ul>
          {event.vip.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <></>;
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
