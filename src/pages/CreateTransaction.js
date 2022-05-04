import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Transaction } from "../classes/blockchainClasses";
import { BlockchainService } from "../services/blockchainService";
const CreateTransaction = ({ setPendingTransactions }) => {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const createTransaction = () => {
    const tx = new Transaction(
      BlockchainService.getWalletKeys(0).publicKey,
      toAddress,
      amount
    );
    tx.signTransaction(BlockchainService.getWalletKeys(0).keyObj);
    BlockchainService.addTransaction(tx);
    setPendingTransactions([...BlockchainService.getPendingTransactions()]);
  };
  return (
    <>
      <p className="fs-1">Create a transaction</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>From address</Form.Label>
          <Form.Control
            type="text"
            readOnly
            value={BlockchainService.getWalletKeys(0).publicKey}
          />
          <Form.Text className="text-muted">
            This is your wallet address.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>To address</Form.Label>
          <Form.Control
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
          />
          <Form.Text className="text-muted">
            The address of the wallet where you want to send the money to.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" onClick={createTransaction}>
          Create transaction
        </Button>
      </Form>
    </>
  );
};

export default CreateTransaction;
