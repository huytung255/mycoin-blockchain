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
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
