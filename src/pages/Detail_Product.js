import React, {useEffect} from "react";
import Card from "./Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import carB from "../images/product/t_1.png";
import {Products} from "../data/Products";
import '../App.css';
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
function DetailProduct(props)
{
    console.log(props);
    
    // useEffect(() => {
    //     return () => {
    //         console.log("Hello",props);
    //     };
    // }, [])
    return(
        
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
          <Nav.Link eventKey="third">Manufactures</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="forth">Design</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth">Maintenance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sixth">Potfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="seventh">Additional Information</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
  <Col sm={8}>
      
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <h4>Product Name</h4>
        <Container>
            <Row>
                <Col sm={6} style={{textAlign:'justify'}}>
                    <p>The new GLC is slightly larger than the model it replaces. The GLC’s overall length is up 2.4 inches to 185.7. The wheelbase grows by 0.6 inches, but it is 0.1 inches shorter. Although the crossover remains the same width, the front and rear track grow by 0.3 and 1.9 inches, respectively. The larger footprint translates into more cabin and cargo space, which increases by 1.8 cubic feet to 21.2.

While the new GLC is larger, it’s slipperier, too, as Mercedes lowered its drag coefficient from 0.31 to 0.29. Mercedes optimized many components such as the underbody paneling, wheels and wheel spoilers, roof spoiler, and more, designing the new crossover with comfort, quietness, and efficiency in mind.</p>
                </Col>
                <Col sm={6}>
                <br/>
                    <img src={carB} width="100%" height="60%" style={{backgroundColor:'whitesmoke',padding:'3%'}} className="descImg"/>
                    <br/>
                    <ListGroup as="ul">
  <ListGroup.Item as="li" active>
    Car Name
  </ListGroup.Item>
  <ListGroup.Item as="li">Manufactured: </ListGroup.Item>
  <ListGroup.Item as="li">Engine Type: </ListGroup.Item>
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
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
       
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        </Tab.Pane>
      </Tab.Content>
    </Col>

   
   
  </Row>
</Tab.Container>
                </Col>
            </Row>
            <br/>
        </Container>
    );
}
export default DetailProduct;