import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, Router, withRouter } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import '../App.css';
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHands,faProcedures,faUsers,faPhone,faCog } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
  function Contacts()
  {
    return (
<Container expand="lg" bg="dark" fluid="true">

  <Container fluid="true" className="contaCont">
        <br></br>
        <br></br>
        <Container><h4 style={{textAlign: 'left',color:'white'}}>Connect with us! <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faPinterest} /></h4>
        <br></br>
        </Container>
        <Row className="contRow">
            <Col sm className="mbo">
            <div>
              <Container style={{backgroundColor:'1a1c1fdc'}} className="contOne">
                <Row style={{backgroundColor:'#1a1c1fdc'}}>
                  <Col sm={12} style={{backgroundColor:'#1a1c1fdc'}}>
                  <p><b>Fill free to connect with us!</b></p>
            <Form>
                <Form.Group className="mb-1" controlId="formBasicEmail" style={{backgroundColor:'#1a1c1fdc'}}>
                  <Form.Label>Email</Form.Label><br/>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicEmail" style={{backgroundColor:'#1a1c1fdc'}}>
                  <Form.Label>Phone</Form.Label><br/>
                  <Form.Control type="phone" placeholder="Enter Phone" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Message" style={{backgroundColor:'#1a1c1fdc'}}>
                  <br></br><br></br>
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '70px' }}
                      />
                </FloatingLabel>
                <br></br>
                <Button variant="outline-light" type="submit">
                  Send Message
                </Button>
            </Form>
                  </Col>
                </Row>
              </Container>
              
            </div>
            </Col>
            <Col sm className="mdo">
            <div>
              <p style={{textAlign:'center',padding:'5%',border:'1px solid white'}} className="tech">
              That, my friends, is a huge mistake. Your Contact Us page is one of the most valuable pages
               on your website. And for most companies, 
              it's typically one of the most-visited site pages.
              Now that you have ideas for a catchy header, use these examples to design the rest of your Contact Us page.
              </p>
            </div>
            </Col>
      
        </Row>
  </Container>
</Container>


    );
  }

// export default withRouter(footer);
export default Contacts;

