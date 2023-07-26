/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand><Image src="https://logos-world.net/wp-content/uploads/2022/01/Super-Mario-Logo.png" width="30%" height="30%" alt="Super Mario Logo" /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link style={{ fontSize: 20 }}>&#127812;Members</Nav.Link>
            </Link>
            <Link passHref href="/member/new">
              <Nav.Link style={{ fontSize: 20 }}>&#127812;Create Member</Nav.Link>
            </Link>
            <Link passHref href="/Teams">
              <Nav.Link style={{ fontSize: 20 }}>&#127812;Teams</Nav.Link>
            </Link>
            <Link passHref href="/team/new">
              <Nav.Link style={{ fontSize: 20 }}>&#127812;Create Team</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link style={{ fontSize: 20 }}>&#127812;Profile</Nav.Link>
            </Link>
            <Button variant="primary" size="md" style={{ fontSize: 20 }} onClick={signOut}>
              &#127812;Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
