import React from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BlockchainService } from "../services/blockchainService";
const PendingTransactions = ({
  pendingTransactions,
  setPendingTransactions,
}) => {
  const navigate = useNavigate();
  const handleMining = () => {
    BlockchainService.minePendingTransactions();
    setPendingTransactions([...BlockchainService.getPendingTransactions()]);
    navigate("/");
  };
  return (
    <>
      <p className="fs-1">Pending transactions</p>
      <p>
        These transactions are waiting to be included in the next block. Next
        block is created when you start the mining process.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Timestamp</th>
            <th>Valid?</th>
          </tr>
        </thead>
        <tbody>
          {pendingTransactions.map((tx, i) => (
            <tr key={tx.timestamp}>
              <td>{i}</td>
              <td>{tx.fromAddress}</td>
              <td>{tx.toAddress}</td>
              <td>{tx.amount}</td>
              <td>{tx.timestamp}</td>
              <td>{tx.isValid() ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="dark" onClick={handleMining}>
        Start mining
      </Button>
    </>
  );
};

export default PendingTransactions;
