import React, { Children, ReactNode } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { LinkGradientButton } from "../../elements/button/button";
import CloudImage from "../../elements/cloudImage/cloudImage";

type Event = {
  what: string;
  when: string;
  where: string;
  description: string;
  imageId: string;
};

type EventProps = {
  event: Event;
  children?: ReactNode | ReactNode[];
};

const market: Event = {
  what: "The Rainbow Market with We Are Family",
  when: "Saturday, September 25, 11am - 5pm",
  where: "1801 Reynolds Ave N Charleston",
  description:
    "Join Closet Case Thrift Store and other fabulous vendors for the inaugural Rainbow Market featuring over 20 curated vendors.",
  imageId: "rainbowmarket_ij1n4r",
};
const service: Event = {
  what: "Worship Service with Two Rivers Church",
  when: "Sunday, September 26, 10am",
  where: "Virtual Only",
  description: "",
  imageId: "1631878544708_y0bfc7",
};
const tour: Event = {
  what: "The Real Rainbow Row Tour with Walk & Talk Charleston",
  when: "Sunday, September 26, 1:30pm and 4:30pm",
  where: "",
  description:
    "The Real Rainbow Row tour chronicles the LGBTQ+ History of Charleston, working to combat invisibility of this community in the historic landscape and to provide a more complete historic interpretation of Charleston.",
  imageId: "tour_nu2yyl",
};
const trivia: Event = {
  what: "Let's Get Trivial: LGBTQ Trivia Night at Holy City Brewing",
  when: "Monday, September 27, 6:30pm",
  where: "1021 Aragon Ave, North Charleston",
  description:
    "💡Let’s Get Trivial💡Join Charleston Pride at Holy City Brewing tonight, September 27, for an evening of quizzy and boozy fun. 🧠🍻🎉 LGBTQ Trivia hosted by the wonderful Shawna Jarrett and Melody Lucas will take place entirely outdoors (weather permitting). $1 of every 🍻✨HCB Sparkly Princess✨🍻 goes to Charleston Pride.",
  imageId: "1631795725381_zvl0jz",
};
const taco: Event = {
  what: "Nacho Mother's Taco Tuesday with Taco Boy",
  when: "Tuesday, September 28, 7:30pm to 10:30pm",
  where: "217 Huger St, Charleston, SC",
  description: "",
  imageId: "1631852252124_dlwtw6",
};
const dig: Event = {
  what: "Dinner at Dig with live music by Return of the Mac",
  when: "Wednesday, September 29, 6:30pm - 9:30pm",
  where: "1049 E Montague Ave, North Charleston",
  description:
    "Day 5 of Pride Week promises to be a rockin’ good time. Join Charleston Pride at DIG at the Park for dinner, drinks, and live music by Return of the MAC!",
  imageId: "1631164711879_qk6wxb",
};
const comedy: Event = {
  what: "LGBTLOL: A Night of Stand-Up Comedy at Charleston Music Hall",
  when: "Thursday, September 30, Door 7PM, Show 8PM",
  where: "37 John St, Charleston",
  description:
    "Join Charleston Pride at Charleston Music Hall on September 30 at 8 PM for 🤣LGBTLOL🤣, a night of stand-up comedy. Headlined by Ian Aber, featuring Shawna Jarrett with Matthew English, Karen Felix, and Junior Cook, this event promises an unforgettable night of laughs.",
  imageId: "1631859583344_ti9ntf",
};
const bingo: Event = {
  what: "Bingo, Beers, and Bowling at The Alley",
  when: "Friday, October 1, Door 5:30pm, 6:30pm Bingo",
  where: "",
  description: "Hosted by Ava Clear",
  imageId: "1631859304899_pe7ymd",
};
const blockade: Event = {
  what: "Charleston Blockade & Hurricanes Pride Games",
  when: "Saturday October 2, Noon",
  where: "Danny Jones Rec Center in North Charleston. ",
  description: "Blockade kicks off at 12pm and Hurricanes kick off at 2pm.",
  imageId: "rugby_qn7l9d",
};
const prism: Event = {
  what: "Prism Party at Union Station",
  when: "Saturday October 2, 7pm - 11pm",
  where: "652 King Street, Charleston",
  description:
    "Join us for Charleston Pride's most popular party, the ✨Prism Party✨, at Union Station on Saturday, October 2 from 7-11 pm, featuring dancing, drag queens, and drinks! 💃👑🍹 The event will be indoor/outdoor, with the venue's garage doors kept open and areas available outdoors, weather permitting. Vaccination and masks are strongly encouraged. This is a limited capacity event so purchase tickets in advance to guarantee your attendance. The Prism Party is an 18+ event. IDs will be checked at the door.",
  imageId: "prism_iix5nn",
};

const EventCard = (props: EventProps) => {
  return (
    <Col md="6">
      <div className="card card-blog card-plain">
        <div className="position-relative">
          <a className="d-block blur-shadow-image">
            <CloudImage
              imageId={props.event.imageId}
              className="img-fluid shadow border-radius-lg"
            ></CloudImage>
          </a>
        </div>
        <div className="card-body px-1 pt-3">
          <h5>{props.event.what}</h5>
          <p className="text-gradient text-dark mb-2 text-sm">
            {props.event.when}
          </p>
          {props.event.where && (
            <p className="text-muted">{props.event.where}</p>
          )}

          {props.event.description && <p>{props.event.description}</p>}

          {props.children}
        </div>
      </div>
    </Col>
  );
};

const Events = () => {
  return (
    <Row>
      <EventCard event={market}></EventCard>
      <EventCard event={service}>
        <LinkGradientButton
          color="primary"
          href="https://tworiverschs.org/live/"
        >
          Join Virtually
        </LinkGradientButton>
      </EventCard>
      <EventCard event={tour}>
        <LinkGradientButton
          color="primary"
          href="https://www.walkandtalkchs.com/#calendar-and-tickets"
        >
          Get Tickets
        </LinkGradientButton>
      </EventCard>
      <EventCard event={trivia}></EventCard>
      <EventCard event={taco}></EventCard>
      <EventCard event={dig}></EventCard>
      <EventCard event={comedy}>
        <LinkGradientButton
          color="primary"
          href="https://www.ticketmaster.com/event/2D005B0BD0ED482D"
        >
          Get Tickets
        </LinkGradientButton>
      </EventCard>
      <EventCard event={bingo}>
        <strong>$5 at the door.</strong> Not available to purchase ahead of
        time.
      </EventCard>
      <EventCard event={blockade}></EventCard>
      <EventCard event={prism}>
        <LinkGradientButton
          color="primary"
          href="https://aftontickets.com/prismparty2021"
        >
          Get Tickets
        </LinkGradientButton>
      </EventCard>
    </Row>
  );
};

const Schedule = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center text-gradient text-primary my-3">
          <h1>Schedule of Events</h1>
        </Col>
      </Row>
      <Events />
    </Container>
  );
};

export default Schedule;
