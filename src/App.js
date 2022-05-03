import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/common/MyNavbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useState } from "react";
import { Blockchain } from "./classes/blockchainClasses";
function App() {
  return (
    <>
      <MyNavbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
