import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { BlockchainService } from "../../services/blockchainService";
const SelectedBlockTransaction = ({ selectedBlock }) => {
  const [block, setBlock] = useState(BlockchainService.getBlockByIndex(0));
  useEffect(() => {
    setBlock(BlockchainService.getBlockByIndex(selectedBlock));
  }, [selectedBlock]);
  if (block.transactions.length !== 0)
    return (
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
              <td>{tx.fromAddress ? tx.fromAddress : "System"}</td>
              <td>{tx.toAddress}</td>
              <td>
                {tx.fromAddress ? (
                  tx.amount
                ) : (
                  <>
                    {tx.amount}
                    <br />
                    <span className="text-muted">Block reward</span>
                  </>
                )}
              </td>
              <td>{tx.timestamp}</td>
              <td>{tx.isValid() ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  else return "This block has no transactions.";
};

export default SelectedBlockTransaction;
