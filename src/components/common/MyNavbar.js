import React from "react";
import { Navbar, Container, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlockchainService } from "../../services/blockchainService";
import CreateWalletModal from "./CreateWalletModal";
const MyNavbar = ({ id }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyCoin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {id ? (
            <>
              <Nav className="ms-auto"></Nav>
              <Nav className="ms-1">
                <Button
                  as={Link}
                  to="/create-transaction"
                  variant="outline-light"
                >
                  Create a transaction
                </Button>
              </Nav>
            </>
          ) : (
            <Nav className="ms-auto">
              <CreateWalletModal />
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
