import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BlockchainService } from "../../services/blockchainService";
const WalletModal = ({ id }) => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const wallet = BlockchainService.getWalletKeys(id).return(
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Wallet
      </Button>
      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WalletModal;
