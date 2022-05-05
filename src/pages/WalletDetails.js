import React, { useState } from "react";
import { BlockchainService } from "../services/blockchainService";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const WalletDetails = () => {
  const { address } = useParams();
  const wallet = BlockchainService.findWalletByAddress(address);
  const txHistory = BlockchainService.getAllTransactionsForWallet(
    wallet.publicKey
  );
  return (
    <>
      <p className="fs-1">Wallet's details</p>
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
                    tx.fromAddress !== address ? (
                      <Link to={"/wallet-details/" + tx.fromAddress}>
                        {tx.fromAddress}
                      </Link>
                    ) : (
                      <>
                        {tx.fromAddress}
                        <br />
                        <span
                          style={{ fontSize: "12px" }}
                          className="text-muted"
                        >
                          This wallet
                        </span>
                      </>
                    )
                  ) : (
                    "System"
                  )}
                </td>
                <td>
                  {tx.toAddress !== address ? (
                    <Link to={"/wallet-details/" + tx.toAddress}>
                      {tx.toAddress}
                    </Link>
                  ) : (
                    <>
                      {tx.toAddress}
                      <br />
                      <span style={{ fontSize: "12px" }} className="text-muted">
                        This wallet
                      </span>
                    </>
                  )}
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
    </>
  );
};

export default WalletDetails;
