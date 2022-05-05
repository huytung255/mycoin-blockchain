import React, { useState } from "react";
import { BlockchainService } from "../services/blockchainService";
import { Table } from "react-bootstrap";
import WalletInformationModal from "../components/common/WalletInformationModal";
const WalletDetails = ({ id }) => {
  const [modalShow, setModalShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleClose = () => setModalShow(false);
  const handleShow = (address, name) => {
    setInfo({ address, name });
    setModalShow(true);
  };
  const wallet = BlockchainService.getWalletKeys(id);
  const txHistory = BlockchainService.getAllTransactionsForWallet(
    wallet.publicKey
  );
  return (
    <>
      <p className="fs-1">Your wallet's details</p>
      <p className="fw-bold">
        Name:
        <br />
        <span className="fw-normal">{wallet.name}</span>
      </p>
      <p className="fw-bold">
        Address:
        <br />
        <span className="fw-normal">{wallet.publicKey}</span>
      </p>
      <p className="fw-bold">
        Balance:
        <br />
        <span className="fw-normal">
          {BlockchainService.getBalanceOfAddress(wallet.publicKey)}
        </span>
        <br />
        <span style={{ fontSize: "12px" }} className="text-muted fw-normal">
          Every account has 100 MyCoins upon creation for demonstration purpose.
        </span>
      </p>
      <p className="fw-bold">
        Transaction history:
        <br />
        {txHistory.length === 0 && (
          <span style={{ fontSize: "12px" }} className="text-muted fw-normal">
            This account has no transactions.
          </span>
        )}
      </p>
      {txHistory.length !== 0 && (
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
            {txHistory.map((tx, i) => (
              <tr key={tx.timestamp}>
                <td>{i}</td>
                <td>
                  {tx.fromAddress ? (
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
                  ) : (
                    "System"
                  )}
                </td>
                <td>
                  <a
                    onClick={() => handleShow(tx.toAddress, tx.toName)}
                    href="#"
                  >
                    {tx.toName}
                    <br />
                    <span style={{ fontSize: "12px" }} className="text-muted">
                      {tx.toAddress}
                    </span>
                  </a>
                </td>
                <td>
                  {tx.fromAddress ? (
                    tx.amount
                  ) : (
                    <>
                      {tx.amount}
                      <br />
                      <span style={{ fontSize: "12px" }} className="text-muted">
                        Block reward
                      </span>
                    </>
                  )}
                </td>
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
      )}
      <WalletInformationModal
        show={modalShow}
        handleClose={handleClose}
        wallet={info}
      />
    </>
  );
};

export default WalletDetails;
