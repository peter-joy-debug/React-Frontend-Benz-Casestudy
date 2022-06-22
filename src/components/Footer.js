import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router, withRouter } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHands,faProcedures,faUsers,faPhone,faCog } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";

  function Footer()
  {
    return (
<Container expand="lg" fluid="true" variant="primary" className='footer-one'>
  <Container className="footerKeeper">
  <Row>
    <Col sm>
      <Container>
        <Row>
          <Col sm={12}>
            <p><b>Social Media</b></p>
            <p>
            <Link className="footerLinks"><span> <FontAwesomeIcon icon={faFacebook} /></span> Facebook<br/></Link>
            <Link className="footerLinks"><span><FontAwesomeIcon icon={faTwitter} /></span> Twitter<br/></Link>
            <Link className="footerLinks"><span><FontAwesomeIcon icon={faYoutube} /></span> Youtube<br/></Link>
            <Link className="footerLinks"><span><FontAwesomeIcon icon={faInstagram} /></span> Instagram<br/></Link>
            <Link className="footerLinks"> <span><FontAwesomeIcon icon={faPinterest} /></span> Pinterest<br/> </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
    <Col sm>
      <Container>
      <Row>
          <Col sm={12}>
            <p><b>Important Links</b></p>
            <p>
              <Link className="footerLinks" to="/"><span><FontAwesomeIcon icon={faHome} /></span> Home<br/></Link>
              <Link className="footerLinks" to="/About"><span><FontAwesomeIcon icon={faCog} /></span> About<br/></Link>
              <Link className="footerLinks" to="/Product"><span><FontAwesomeIcon icon={faProcedures} /></span> Products<br/></Link>
              <Link className="footerLinks" to="/Contact"><span><FontAwesomeIcon icon={faPhone} /></span> Contact<br/></Link>
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
    <Col sm >
      <Container>
      <Row>
          <Col sm={12}>
            <p><b>Subscribe For Updates</b></p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label><br/>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
  </Container>

  <Container>
    <Row>
      <Col sm={12}>
        <p className="endWord">Benz is pleased to welcome you on our platform &copy; 2022</p>
      </Col>
    </Row>
  </Container>
</Container>
    );
  }

export default Footer;
// export default footer;

