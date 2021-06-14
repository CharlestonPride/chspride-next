import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";

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
      <>
        <Image
          src="/images/logo.jpg"
          alt="Charleston Pride"
          width="239"
          height="82"
        ></Image>
      </>
    </Link>
  );
};

const AboutUs = () => {
  return (
    <NavDropdown title="About Us" id="basic-nav-dropdown">
      <NavDropdownItem href="/our-team">Our Team</NavDropdownItem>
      <NavDropdown.Divider />
      <NavDropdownItem href="#action/3.4">Serve on the Board</NavDropdownItem>
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
            <NavLink href="#link">Sponsors</NavLink>
          </Nav>
          <Nav>
            <Link passHref href="/">
              <Button className="bg-gradient-primary btn-round" size="sm">
                Get Involved
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
