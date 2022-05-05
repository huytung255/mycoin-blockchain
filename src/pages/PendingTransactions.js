import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WalletInformationModal from "../components/common/WalletInformationModal";
import { BlockchainService } from "../services/blockchainService";
const PendingTransactions = ({
  id,
  pendingTransactions,
  setPendingTransactions,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleClose = () => setModalShow(false);
  const handleShow = (address, name) => {
    setInfo({ address, name });
    setModalShow(true);
  };
  const navigate = useNavigate();
  const handleMining = () => {
    BlockchainService.minePendingTransactions(id);
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
              <td>
                <a
                  onClick={() => handleShow(tx.fromAddress, tx.fromName)}
                  href="#"
                >
                  {tx.fromName}
                  <br />
                  <span style={{ fontSize: "12px" }} className="text-muted">
                    {tx.fromAddress}
                  </span>
                </a>
              </td>
              <td>
                <a onClick={() => handleShow(tx.toAddress, tx.toName)} href="#">
                  {tx.toName}
                  <br />
                  <span style={{ fontSize: "12px" }} className="text-muted">
                    {tx.toAddress}
                  </span>
                </a>
              </td>
              <td>{tx.amount}</td>
              <td>
                {tx.timestamp} <br />
                <span style={{ fontSize: "12px" }} className="text-muted">
                  {new Date(tx.timestamp).toLocaleString()}
                </span>
              </td>
              <td>{tx.isValid() ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="dark" onClick={handleMining}>
        Start mining
      </Button>
      <WalletInformationModal
        show={modalShow}
        handleClose={handleClose}
        wallet={info}
      />
    </>
  );
};

export default PendingTransactions;
