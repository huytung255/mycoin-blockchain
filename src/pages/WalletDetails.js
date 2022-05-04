import React from "react";
import { BlockchainService } from "../services/blockchainService";
const WalletDetails = ({ id }) => {
  const wallet = BlockchainService.getWalletKeys(id);
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
    </>
  );
};

export default WalletDetails;
