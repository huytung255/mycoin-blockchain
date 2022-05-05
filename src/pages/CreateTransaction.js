import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Transaction } from "../classes/blockchainClasses";
import { BlockchainService } from "../services/blockchainService";
const CreateTransaction = ({ id, setPendingTransactions }) => {
  const navigate = useNavigate();
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const createTransaction = () => {
    try {
      const to = BlockchainService.findWalletByAddress(toAddress);
      const tx = new Transaction(
        BlockchainService.getWalletKeys(id).publicKey,
        toAddress,
        parseInt(amount)
      );
      tx.signTransaction(BlockchainService.getWalletKeys(id).keyObj);
      BlockchainService.addTransaction(tx);
      setPendingTransactions([...BlockchainService.getPendingTransactions()]);
      navigate("/pending-transaction");
    } catch (e) {
      alert(e);
    }
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
            value={BlockchainService.getWalletKeys(id).publicKey}
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
