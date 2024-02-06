// Import necessary components and modules
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import AboutMe from "./AboutMe"; // Import your About component
import LandingPage from "./LandingPage";

// Navbar component
function MyNavbar() {
  return (
    <Router>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Deepesh Gotia</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/#home" element={<LandingPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default MyNavbar;
