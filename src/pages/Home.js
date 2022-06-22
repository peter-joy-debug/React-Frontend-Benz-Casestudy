import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, Router, withRouter } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Slider from '../components/Slider';
import home_1 from "../images/hb_1.jpg";
import home_2 from "../images/hb_2.jpeg";
import Form from "react-bootstrap/Form";
import founder from "../images/founder.jpg";
import head from "../images/headquaters.jpg";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import '../App.css';
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  function Home()
  {
    return (
<Container expand="lg" bg="dark" fluid="true">

  <Row>
    <Col sm={6}>
    <br></br>
    <Slider />
    </Col>
    <Col sm={6}>
        <br></br>
    <Container className="homeHolder">
    <Container className="homePart">
    <Row>
    <Col sm>
        <h4>
            Learn our Technology
        </h4>
        <hr></hr>
        <p>Benz have been there for years since 1920, After that time we have been able to Advance our Technology in terms of manufactiring and selling of our products.</p>
        <Button variant="outline-light">Read More</Button>{' '}
    </Col>
    <Col sm>
        <br></br>
    <img
                src={home_1}
                className="d-block mx-lg-auto img-fluid"
                style={{borderRadius: '10px'}}
    />
    </Col>
    </Row>
    </Container>
    <br/>
    <Container className="homePart">
    <Row>
    <Col sm>
    <br></br>
    <img
                src={home_2}
                className="d-block mx-lg-auto img-fluid"
                style={{borderRadius: '10px'}}
    />
        
    </Col>
    <Col sm>
    <h4>
            Journey with Clients
        </h4>
        <hr></hr>
        <p>We appreciate our partnership with the customers, Client centered services is our motive.</p>

        <Button variant="outline-light">Read More</Button>{' '}
 
    </Col>
    </Row>
    </Container>
    </Container>
    </Col>
  </Row>
<br></br>
  <Container className="homeAbout">
  <Row>
    <Col sm={12}>
    <h4 style={{textAlign: 'justify',padding: '1% 15%'}}>ABOUT OUR INDUSTRY</h4>
    <hr></hr>
    <Row>
    <Col sm>
    <br></br>
    <Container style={{borderRadius: '15px',backgroundColor: '#1a1c1fdc',padding: '5% 4%',color:'white'}}>
    <img
                src={founder}
                className="d-block mx-sm-auto img-fluid"
                style={{borderRadius: '15px',height: '90%'}}
    />
    <br></br>
    <span><i>Founder:</i> Carl Friedrich Benz</span>
    <br></br>
    <br></br>
    <h5>
            Our Slogan
        </h5>
        <hr></hr>
        <p style={{textAlign: 'justify'}}> The Mercedes-Benz Slogan is “The Best or Nothing,” and it certainly embodies the quality of the vehicles the brand provides even today. From the infamous S-Class to the powerful GLS, this brand has plenty of vehicles that gives luxury vehicle shoppers here in Peoria an excellent driving experience.</p>
    </Container>
 
    </Col>
    <Col sm>
      <Container>
        <h5>
            Founder
        </h5>
        <p style={{textAlign: 'justify'}}>Carl Friedrich Benz, sometimes also Karl Friedrich Benz, was a German engine designer and automotive engineer. His Benz Patent Motorcar from 1885 is considered the first practical automobile and first car put into series production. He received a patent for the motorcar in 1886.</p>
        <Button variant="outline-dark">Read More</Button>{' '}
        <hr></hr>
        </Container>
        <Container>
        <h5>
            Headquarter
        </h5>
        <Container style={{borderRadius: '15px',backgroundColor: '#1a1c1fdc',padding: '5% 4%',color:'white'}}>
        <img
                src={head}
                className="d-block mx-sm-auto img-fluid"
                style={{borderRadius: '15px',height: '80%',width:'100%'}}
    />
    <br></br>
    <span><i>Headquarter:</i> Stuttgart, Germany</span>
    <br></br>
    </Container>
    <br></br>
        <p style={{textAlign: 'justify'}}>Mercedes-Benz was founded in 1926 by Karl Benz, Gottlieb Daimler, Wilhelm Maybach and Emil Jellinek, whose daughter Mercedes is our original namesake. With offices in 93 locations worldwide and a corporate headquarters in Stuttgart, Germany, our global presence continues to grow.</p>
        <Button variant="outline-dark">Read More</Button>{' '}
        </Container>
    </Col>
    </Row>
    </Col>
  </Row>
  <br></br>
  </Container>

  <Container fluid="true">
        <br></br>
        <br></br>
        <Container><h4 style={{textAlign: 'center'}}><Spinner animation="grow" size="lg" />UR BRANDS</h4>
        <br></br>
        </Container>
        <Row>
            <Col sm className="mb">
            <div>
              <h4 style={{textAlign:'center'}}>Mercedes Benz</h4>
            </div>
            </Col>
            <Col sm className="mm">
            <div><h4 style={{textAlign:'center'}}>Maybach Benz</h4></div>
            </Col>
            <Col sm className="me">
            <div><h4 style={{textAlign:'center'}}>SUV Benz</h4> </div>
            </Col>
            <Col sm className="mbb">
            <div><h4 style={{textAlign:'center'}}>Athlon Benz</h4>  </div>
            </Col>
        </Row>
        <Row>
          
        </Row>
  </Container>

  <Container fluid="true" className="contaCont">
        <br></br>
        <br></br>
        <Container><h4 style={{textAlign: 'center',color:'white'}}>CONTACT US</h4>
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
export default Home;

