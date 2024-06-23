import Link from "next/link";
import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { fbUrl, instagramUrl, twitterUrl } from "../../../utils/socialMedia";
import { LinkButton, LinkOutlineButton } from "../../elements/button/button";

const Hamburger = () => {
  return (
    <span className="navbar-toggler-icon mt-2">
      <span className="navbar-toggler-bar bar1" />
      <span className="navbar-toggler-bar bar2" />
      <span className="navbar-toggler-bar bar3" />
    </span>
  );
};


const Brand = () => {
  return (
    <Link href="/">
      <img
        height="70"
        src="https://charleston-pride.stream.prepr.io//7hv49f57o9bd-chspride-logo-4c.jpg"
        alt="Charleston Pride"
      ></img>
    </Link>
  );
};

const AboutUs = () => {
  return (
    <NavDropdown title="About Us" id="about-us">
      <Nav.Link href="/our-team">Our Team</Nav.Link>
      <Nav.Link href="/bylaws">Our Bylaws</Nav.Link>
      <Nav.Link href="/serve-on-the-board">
        Serve on the Board
      </Nav.Link>
    </NavDropdown>
  );
};

const GetInvolved = () => {
  return (
    <NavDropdown title="Get Involved" id="get-involved">
      <Nav.Link href="/donate">Make a Donation</Nav.Link>
      <Nav.Link href="/store">Shop with Pride</Nav.Link>
      <Nav.Link href="/volunteer">Volunteer with Pride</Nav.Link>
    </NavDropdown>
  );
};

const Events = () => {
  return (
    <NavDropdown title="Events" id="events">
      <Nav.Link href="/tacos-and-tattas">
        Taco's and Tattas!
      </Nav.Link>
      <Nav.Link href="/pageant">
        Pageant: Renaissance Ball
      </Nav.Link>
    </NavDropdown>
  );
};

const StayInTouch = () => {
  return (
    <NavDropdown title="Stay in Touch" id="stay-in-touch">
      <NavDropdown.Item href={fbUrl} target="_blank">
        Like us on Facebook
      </NavDropdown.Item>
      <NavDropdown.Item href={instagramUrl} target="_blank">
        Follow us on Instagram
      </NavDropdown.Item>
      <NavDropdown.Item href={twitterUrl} target="_blank">
        Follow us on Twitter
      </NavDropdown.Item>
    </NavDropdown>
  );
};

const PrideWeek = () => {
  return (
    <NavDropdown title="Pride Week" id="pride-week">
      <Nav.Link href="/pride-guide">Pride Guide</Nav.Link>
      <Nav.Link href="/vendor-registration">
        Vendor Registration
      </Nav.Link>
    </NavDropdown>
  );
};

export default function MainNavBar({}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="py-3">
        <Navbar.Brand>
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Hamburger />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <AboutUs />
            <GetInvolved />
            <StayInTouch />
            {/* <Events /> */}
            {/* <PrideWeek /> */}
          </Nav>
          <LinkButton color="primary" href="/donate">
            Make a Donation
          </LinkButton>
          <LinkOutlineButton color="primary" href="/become-a-sponsor">
            Become a Sponsor
          </LinkOutlineButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
