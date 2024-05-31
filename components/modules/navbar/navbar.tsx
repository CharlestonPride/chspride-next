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

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <Nav.Link>{children}</Nav.Link>
    </Link>
  );
};

const NavDropdownItem = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <NavDropdown.Item>{children}</NavDropdown.Item>
    </Link>
  );
};

const Brand = () => {
  return (
    <Link href="/">
      <img
        height="70"
        src="https://res.cloudinary.com/charlestonpride-org/image/upload/h_70/v1625256541/CHSPride_Logo_4C.jpg"
        alt="Charleston Pride"
      ></img>
    </Link>
  );
};

const AboutUs = () => {
  return (
    <NavDropdown title="About Us" id="about-us">
      <NavDropdownItem href="/our-team">Our Team</NavDropdownItem>
      <NavDropdownItem href="/bylaws">Our Bylaws</NavDropdownItem>
      <NavDropdown.Divider />
      <NavDropdownItem href="/serve-on-the-board">
        Serve on the Board
      </NavDropdownItem>
    </NavDropdown>
  );
};

const GetInvolved = () => {
  return (
    <NavDropdown title="Get Involved" id="get-involved">
      {/* <NavDropdownItem href="/friends-of-pride">
        Become a Friend of Pride
      </NavDropdownItem> */}

      <NavDropdownItem href="/donate">Make a donation</NavDropdownItem>
      <NavDropdownItem href="/store">Shop with Pride</NavDropdownItem>
      <NavDropdownItem href="/volunteer">Volunteer with Pride</NavDropdownItem>
    </NavDropdown>
  );
};

const Events = () => {
  return (
    <NavDropdown title="Events" id="events">
      <NavDropdownItem href="/tacos-and-tattas">
        Taco's and Tattas!
      </NavDropdownItem>
      <NavDropdownItem href="/pageant">
        Pageant: Renaissance Ball
      </NavDropdownItem>
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
      <NavDropdownItem href="/pride-guide">Pride Guide</NavDropdownItem>
      <NavDropdownItem href="/vendor-registration">
        Vendor Registration
      </NavDropdownItem>
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
