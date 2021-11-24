import React from "react";
import { Container, Nav, Navbar, Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">Öt </Navbar.Brand>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/300px-Star%2A.svg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Kocsma{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/">Kocsma</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/italok">Italok</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/unatkozom">Unatkozom</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
