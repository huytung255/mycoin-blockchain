import React, { useEffect, useState } from "react";
import Block from "../components/Home/Block";
import { BlockchainService } from "../services/blockchainService";
const Home = () => {
  const [blocks, setBlocks] = useState();
  useEffect(() => {
    setBlocks({ ...BlockchainService.getBlocks() });
  }, []);
  useEffect(() => {
    console.log(blocks);
  }, [blocks]);
  return (
    <>
      <p className="fs-1">Blocks on chain</p>
      <div className="d-flex">
        {blocks &&
          blocks.chain.map((b, i) => {
            const { hash, previousHash, nonce, timestamp } = b;
            return (
              <div key={i} className="p-1">
                <Block
                  index={i + 1}
                  hash={hash}
                  previousHash={previousHash}
                  nonce={nonce}
                  timestamp={timestamp}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Home;
