import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="light" variant='light' expand="lg" collapseOnSelect >
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Unipack</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ml-auto"
                    style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/action2">Shop</Nav.Link>
                        <Nav.Link href="/action3">Contact Us </Nav.Link>
                    </Nav>
                    <Nav className="mr-auto">
                <LinkContainer to='/cart'>
                  <Nav.Link> <i className="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link><i className="fa-solid fa-user"></i>Login</Nav.Link>
                </LinkContainer>
              </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header