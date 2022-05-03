import React, { useEffect, useState } from "react";
import Block from "../components/Home/Block";
import { BlockchainService } from "../services/blockchainService";
const Home = () => {
  const [blocks, setBlocks] = useState();
  useEffect(() => {
    setBlocks(BlockchainService.getBlocks());
  }, []);
  useEffect(() => {
    console.log(blocks);
  }, [blocks]);
  return (
    <>
      <p className="fs-1">Blocks on chain</p>
      {blocks &&
        blocks.chain.map((b, i) => {
          const { hash, previousHash, nonce, timestamp } = b;
          return (
            <Block
              key={i}
              hash={hash}
              previousHash={previousHash}
              nonce={nonce}
              timestamp={timestamp}
            />
          );
        })}
    </>
  );
};
export default Home;
