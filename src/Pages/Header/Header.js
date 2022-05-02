import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Subtraction 1.png';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth)
  }

  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /> HappyOuting</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">blog</Nav.Link>
          </Nav>
          <Nav>
            {
              user ?
                [
                  <Nav.Link as={Link} to="/manageItems">Manage Items</Nav.Link>,
                  <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>,
                  <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>,
                  <button onClick={handleSignOut}>Sing Out</button>

                ]
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;