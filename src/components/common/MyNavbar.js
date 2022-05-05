import React from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BlockchainService } from "../../services/blockchainService";
import CreateWalletModal from "./CreateWalletModal";
const MyNavbar = ({ address, setAddress, pendingTransactions }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    setAddress(null);
    navigate("/");
  };
  let wallet = {};
  try {
    wallet = BlockchainService.findWalletByAddress(address);
  } catch (error) {}

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MyCoin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse address="basic-navbar-nav">
          {address !== null ? (
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
              <Nav className="ms-1">
                <NavDropdown
                  menuVariant="dark"
                  title="Wallet"
                  address="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to={"/wallet-details/" + wallet.publicKey}
                  >
                    Details
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogOut}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </>
          ) : (
            <Nav className="ms-auto">
              <CreateWalletModal setAddress={setAddress} />
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
