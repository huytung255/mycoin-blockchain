import React, { useEffect, useState } from "react";
import Block from "../components/Home/Block";
import SelectedBlockTransaction from "../components/Home/SelectedBlockTransaction";
import { BlockchainService } from "../services/blockchainService";
const Home = () => {
  const [blocks, setBlocks] = useState();
  const [selectedBlock, setSelectedBlock] = useState(0);
  useEffect(() => {
    setBlocks({ ...BlockchainService.getBlocks() });
  }, []);
  useEffect(() => {
    console.log(blocks);
  }, [blocks]);
  return (
    <>
      <p className="fs-1">Blocks on chain</p>
      <div className="d-flex flex-wrap">
        {blocks &&
          blocks.chain.map((b, i) => {
            const { hash, previousHash, nonce, timestamp } = b;
            return (
              <Block
                key={i}
                index={i}
                hash={hash}
                previousHash={previousHash}
                nonce={nonce}
                timestamp={timestamp}
                isSelected={selectedBlock === i}
                setSelectedBlock={setSelectedBlock}
              />
            );
          })}
      </div>
      <p className="fs-1">Transactions inside selected block</p>
      <SelectedBlockTransaction selectedBlock={selectedBlock} />
    </>
  );
};
export default Home;
