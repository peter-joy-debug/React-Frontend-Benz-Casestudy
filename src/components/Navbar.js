import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "..//images//logo.png";
import { Link, Router, withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

const activeTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#1fa2f1" };
    }
  };

  const Navbars = ({ history }) => {
  
    return (

<Navbar bg="light" expand="lg">
  <Container>
      <Navbar.Brand href="#home">
        <img alt="can" src={logo} width="55" height="40" className="d-inline-block align-top" />
      </Navbar.Brand>
    <Navbar.Brand href="#home">Benz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Product">Products</Nav.Link>
        <Nav.Link href="/Team">Team</Nav.Link>
        <Nav.Link href="/Contact">Contact Us</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/Signup">
        Sign Up
      </Nav.Link>
    </Nav>
    
    </Navbar.Collapse>

  </Container>
</Navbar>



    );
};

export default Navbars;

