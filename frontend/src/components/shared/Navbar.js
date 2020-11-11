import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Button, Nav } from 'react-bootstrap';

const Header = ({ username }) => {
  let history = useHistory();
  let links = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/admin/products' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <Navbar
      bg="dark"
      variant="dark"
      collapseOnSelect
      expand="lg"
      className="justify-content-between"
    >
      <Navbar.Brand
        onClick={() => history.push('/')}
        style={{ cursor: 'pointer' }}
      >
        Furniture Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          {links.map((item, idx) => (
            <Nav.Link key={idx} href={item.link}>
              {item.name}
            </Nav.Link>
          ))}
        </Nav>

        <Navbar.Text className="ml-auto mr-4">Welcome {username}</Navbar.Text>

        <Nav className="justify-content-end">
          <Button
            variant="outline-light"
            onClick={() => {
              history.push('/login');
            }}
          >
            Log Out
          </Button>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
