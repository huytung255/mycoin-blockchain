import React from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BlockchainService } from "../../services/blockchainService";
import CreateWalletModal from "./CreateWalletModal";
const MyNavbar = ({ id, setId, pendingTransactions }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyCoin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {id !== null ? (
            <>
              <Nav className="ms-auto">
                <Button
                  as={Link}
                  to="/create-transaction"
                  variant="outline-light"
                >
                  Create a transaction
                </Button>
              </Nav>
              <Nav className="ms-1">
                <Button as={Link} to="/wallet-details" variant="outline-light">
                  Wallet's details
                </Button>
              </Nav>
              {pendingTransactions.length !== 0 && (
                <Nav className="ms-1">
                  <Button
                    as={Link}
                    to="/pending-transaction"
                    variant="outline-light"
                  >
                    Pending transactions{" "}
                    <Badge bg="light" text="dark">
                      {pendingTransactions.length}
                    </Badge>
                  </Button>
                </Nav>
              )}
            </>
          ) : (
            <Nav className="ms-auto">
              <CreateWalletModal setId={setId} />
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
