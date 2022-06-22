import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import carB from "../images/product/b_12.png";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css';
import { Link } from "react-router-dom";
import vi from "../images/product/test.mp4";
import {Products} from "../data/Products";
function Cards(props)
{

  const values = [true];
  const linka=props.Vid;
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

    return(
        
        <Card style={{ width: '18rem',margin:'1%'}} className="prodName">
  <Card.Img variant="top" src={props.Image} style={{width:'100%',height:'160px',padding:'3% 0px'}}/>
  <Card.Body>
    <Card.Title>{props.Title}</Card.Title>
    <Card.Text>
      <p>{props.Desc}</p>
    </Card.Text>
    <Card.Text>
      <p>{props.Price}</p>
    </Card.Text>
    {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          View More
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{props.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Container>
            <br/>
            <Row>
                <Col sm={12}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
  <Col sm={4} style={{backgroundColor:'#101216e5',height:'452px',padding:'1% 1%'}} className="rightNav">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Product Feature</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Rating</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="seventh">Additional Information</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  <Col sm={8}>
      
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <h4>{props.Title}</h4>
        <Container>
            <Row>
                <Col sm={6} style={{textAlign:'justify'}}>
                    <p>{props.Desc}</p>
                </Col>
                <Col sm={6}>
                <br/>
                    <img src={props.Image} width="100%" height="60%" style={{backgroundColor:'whitesmoke',padding:'3%'}} className="descImg"/>
                    <br/>
                    <ListGroup as="ul">
  <ListGroup.Item as="li" active>
    {props.Title}
  </ListGroup.Item>
  <ListGroup.Item as="li">Manufactured: <span style={{fontWeight:'bold'}}>{props.Manufacturer}</span></ListGroup.Item>
  <ListGroup.Item as="li">Engine Type: <span style={{fontWeight:'bold'}}>{props.EngineEngine}</span></ListGroup.Item>
</ListGroup>
                </Col>
            </Row>
        </Container>
        <br/><br/>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Engine</th>
      <th>Interior</th>
      <th>Exterior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{props.EngineEngine}</td>
      <td>  
      <ul type="a">
          {props.EngineInterior.map(s => (<li>{s}</li>))}
      </ul>
      </td>
      <td>
      <ul type="letter">
          {props.EngineExterior.map(s => (<li>{s}</li>))}
      </ul>
      </td>
    </tr>
  
  </tbody>
</Table>
        </Tab.Pane>
        <Tab.Pane eventKey="second"> 
       
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Rating Clients</Accordion.Header>
    <Accordion.Body>
    {props.RatingClient}
    {/* <ul type="letter">
          {props.RatingClient.map(s => (<li>{s}</li>))}
      </ul> */}
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Rating Industries</Accordion.Header>
    <Accordion.Body>
    {props.RatingIndustry}
    {/* <ul type="letter">
          {props.RatingIndustry.map(s => (<li>{s}</li>))}
      </ul> */}
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        </Tab.Pane>

        <Tab.Pane eventKey="seventh">
          <p>
          <video controls width="100%">
          <source src={vi} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
        </p>
        </Tab.Pane>

      </Tab.Content>
    </Col>

   
   
  </Row>
</Tab.Container>
                </Col>
            </Row>
            <br/>
        </Container>


        </Modal.Body>
      </Modal>

    {/* <Link variant="dark" to={`/detailproduct/${props.id}`} params={props.id}>View Product</Link> */}
  </Card.Body>
  <Card.Footer variant="bottom">
  <Card.Text>
      Updated on <i>{props.Date}</i>
   </Card.Text>
  </Card.Footer>
</Card>

    );
}
export default Cards;