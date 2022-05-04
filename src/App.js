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
  const [id, setId] = useState(null);
  const [pendingTransactions, setPendingTransactions] = useState(
    BlockchainService.getPendingTransactions()
  );
  useEffect(() => {
    console.log(pendingTransactions);
  }, [pendingTransactions]);
  return (
    <BrowserRouter>
      <MyNavbar
        id={id}
        setId={setId}
        pendingTransactions={pendingTransactions}
      />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/create-transaction"
            element={
              <CreateTransaction
                setPendingTransactions={setPendingTransactions}
              />
            }
          />
          <Route
            path="/pending-transaction"
            element={
              <PendingTransactions
                pendingTransactions={pendingTransactions}
                setPendingTransactions={setPendingTransactions}
              />
            }
          />
          <Route path="/wallet-details" element={<WalletDetails id={id} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
