import React from "react";
import { Form, Button } from "react-bootstrap";
const CreateTransaction = () => {
  return (
    <>
      <p className="fs-1">Create a transaction</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>From address</Form.Label>
          <Form.Control type="text" readOnly />
          <Form.Text className="text-muted">
            This is your wallet address.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>To address</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            The address of the wallet where you want to send the money to.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter amount" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Create transaction
        </Button>
      </Form>
    </>
  );
};

export default CreateTransaction;
