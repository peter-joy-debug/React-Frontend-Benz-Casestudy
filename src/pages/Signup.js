import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, Router, withRouter } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
  function Signups()
  {
    return (
<Container expand="lg" bg="dark" fluid="true">

<br></br><br></br><br></br>
  <Container >
  <Row>
    <Col sm={12}>
    <Row>
    <Col sm>
    <br></br>
    <Container className="homeAbout" style={{width:'65%'}}>
    <h4 style={{textAlign: 'center',padding: '1% 15%'}}><FontAwesomeIcon icon={faUser} /> <br></br>SIGN UP PAGE</h4>
    <hr></hr>

    <>
  <FloatingLabel
    controlId="floatingInput"
    label="Email"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel><br></br>
  <FloatingLabel controlId="floatingPassword" label="Re-enter Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel><br></br>
  <FloatingLabel controlId="floatingPassword" label="Date of Birth">
    <Form.Control type="date" placeholder="DOB" />
  </FloatingLabel><br></br>
  <FloatingLabel controlId="floatingPassword" label="Phone Number">
    <Form.Control type="phone" placeholder="Phone" />
  </FloatingLabel>
<br></br>
  <FloatingLabel controlId="floatingSelect" label="Type of user">
  <Form.Select aria-label="Floating label select example">
    <option>Select category</option>
    <option value="1">Manager Account</option>
    <option value="2">Current Account</option>
  </Form.Select>
  <br></br>
  <Button type="submit" variant="outline-dark"> Sign-Up </Button> 
</FloatingLabel>
<br></br>

</>


    </Container>


    </Col>
    </Row>
    </Col>
  </Row>
  <br></br>
  </Container>
  <br></br><br></br><br></br>
  
  
</Container>



    );
  }

export default Signups;

