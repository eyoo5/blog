import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="secondary" variant="light" style={{ fontFamily: "optima" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontFamily: "Brush Script MT" }}>
            Esther Yoo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/posts">Stories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default connect(null)(NavigationBar);
