import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/common/MyNavbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Blockchain } from "./classes/blockchainClasses";
import CreateTransaction from "./pages/CreateTransaction";
import { BlockchainService } from "./services/blockchainService";
import PendingTransactions from "./pages/PendingTransactions";
import WalletDetails from "./pages/WalletDetails";
function App() {
  const [address, setAddress] = useState(null);
  const [pendingTransactions, setPendingTransactions] = useState(
    BlockchainService.getPendingTransactions()
  );
  useEffect(() => {
    console.log(pendingTransactions);
  }, [pendingTransactions]);
  return (
    <BrowserRouter>
      <MyNavbar
        address={address}
        setAddress={setAddress}
        pendingTransactions={pendingTransactions}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-transaction"
            element={
              <CreateTransaction
                address={address}
                setPendingTransactions={setPendingTransactions}
              />
            }
          />
          <Route
            path="/pending-transaction"
            element={
              <PendingTransactions
                address={address}
                pendingTransactions={pendingTransactions}
                setPendingTransactions={setPendingTransactions}
              />
            }
          />
          <Route path="/wallet-details/:address" element={<WalletDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
