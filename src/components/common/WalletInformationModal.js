import React from "react";
import { Modal, Button } from "react-bootstrap";
const WalletInformationModal = ({ show, handleClose, wallet }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Wallet's information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="fw-bold text-break">
          Name:
          <br />
          <span className="fw-normal">{wallet.name}</span>
        </p>
        <p className="fw-bold text-break">
          Address:
          <br />
          <span className="fw-normal">{wallet.address}</span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WalletInformationModal;
