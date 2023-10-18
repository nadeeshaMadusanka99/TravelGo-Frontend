// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavLinks = () => {
  const links = [

    { to: '/', text: 'Home' },
    { to: '/Services', text: 'Services' },
    { to: '/Bookings', text: 'Bookings' },
    { to: '/TermsAndConditions', text: 'Terms & Conditions' },
    { to: '/ContactUs', text: 'Contact Us' },
  ];

  return (
    <Nav className="me-auto navContent">
      {links.map((link, index) => (
        <LinkContainer to={link.to} key={index}>
          <Nav.Link>{link.text}</Nav.Link>
        </LinkContainer>
      ))}
    </Nav>
  );
};

export default NavLinks;
