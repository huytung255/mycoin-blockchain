import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const Block = ({ hash, previousHash, nonce, timestamp }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Block 1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {previousHash == "0" && "Genesis block"}
        </Card.Subtitle>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-truncate">
          Hash <br />
          <span className="text-muted">{hash}</span>
        </ListGroupItem>
        <ListGroupItem className="text-truncate">
          Hash of previous block
          <br />
          <span className="text-muted">{previousHash}</span>
        </ListGroupItem>
        <ListGroupItem className="text-truncate">
          Nonce
          <br />
          <span className="text-muted">{nonce}</span>
        </ListGroupItem>
        <ListGroupItem className="text-truncate">
          Timestamp
          <br />
          <span className="text-muted">{timestamp}</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Block;
