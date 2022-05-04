import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/common/MyNavbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import { Blockchain } from "./classes/blockchainClasses";
import CreateTransaction from "./pages/CreateTransaction";
function App() {
  const [id, setId] = useState();

  return (
    <BrowserRouter>
      <MyNavbar id={id} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-transaction" element={<CreateTransaction />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
