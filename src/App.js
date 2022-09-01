import "./App.css";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./containers/Header";
import CharacterListing from "./containers/CharacterListing";
import CharacterDetail from "./containers/CharacterDetail";
import { Container } from "react-bootstrap";
import LocationListing from "./containers/LocationListing";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<CharacterListing />} />
          <Route path="/character/:characterId" element={<CharacterDetail />} />
          <Route path="/location" element={<LocationListing />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
