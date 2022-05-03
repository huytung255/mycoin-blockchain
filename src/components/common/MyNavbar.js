import React from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import { BlockchainService } from "../../services/blockchainService";
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MyCoin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              onClick={() => {
                BlockchainService.generateWalletKeys();
              }}
            >
              Create a wallet
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
