import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BlockchainService } from "../../services/blockchainService";
const CreateWalletModal = ({ setAddress }) => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [name, setName] = useState("");
  const handleCreate = () => {
    const address = BlockchainService.generateWalletKeys(name);
    setAddress(address);
    handleClose();
  };
  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Create or access a wallet
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
            Create or access a wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted">
                Your wallet's name. If there is an existing wallet with this
                name, you will be signed in instead (for demonstration purpose).
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="dark"
            onClick={handleCreate}
            disabled={name.length === 0}
          >
            Create or access
          </Button>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateWalletModal;
