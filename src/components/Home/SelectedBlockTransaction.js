import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BlockchainService } from "../../services/blockchainService";
import WalletInformationModal from "../common/WalletInformationModal";
const SelectedBlockTransaction = ({ selectedBlock }) => {
  const [modalShow, setModalShow] = useState(false);
  const [info, setInfo] = useState({});
  const handleClose = () => setModalShow(false);
  const handleShow = (address) => {
    setInfo({ address });
    setModalShow(true);
  };
  const [block, setBlock] = useState(BlockchainService.getBlockByIndex(0));
  useEffect(() => {
    setBlock(BlockchainService.getBlockByIndex(selectedBlock));
  }, [selectedBlock]);
  if (block.transactions.length !== 0)
    return (
      <>
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
            {block.transactions.map((tx, i) => (
              <tr key={tx.timestamp}>
                <td>{i}</td>
                <td>
                  {tx.fromAddress ? (
                    <a
                      onClick={() => handleShow(tx.fromAddress, tx.fromName)}
                      href="#"
                    >
                      {tx.fromAddress}
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
                    {tx.toAddress}
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
                  {tx.timestamp}
                  <br />
                  <span style={{ fontSize: "12px" }} className="text-muted">
                    {new Date(tx.timestamp).toLocaleString()}
                  </span>
                </td>
                <td>{tx.isValid() ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <WalletInformationModal
          show={modalShow}
          handleClose={handleClose}
          wallet={info}
        />
      </>
    );
  else return "This block has no transactions.";
};

export default SelectedBlockTransaction;
