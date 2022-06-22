import React from "react";
import CardTeam from "./CardTeam";
import Modal from 'react-bootstrap/Modal'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import carB from "../images/product/b_12.png";
import {Teams} from "../data/teams";
import coverImg from "../images/product/covers.jpeg";
import founder from "../images/founder.jpg";
import head from "../images/headquaters.jpg";
import { engine_data } from "../data/engine_desc";
import '../App.css';
import Container from "react-bootstrap/esm/Container";
import home_1 from "../images/hb_1.jpg";
import home_2 from "../images/hb_2.jpeg";
function Abouts()
{
    return(
        <>
        <br></br><br></br>
    <Container className="homePart">
        <Row>
            <Col>
            <div>
            <h4> Our Industry</h4>
                    <br></br>
                <img src={coverImg} width="100%" height="60%" style={{backgroundColor:'whitesmoke',padding:'3%'}} className="descImg"/>
                </div>
                <br></br><br></br>
            </Col>
        </Row>
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
    <br></br>
    <Container >
            <Row>
                <Col>
                <br></br><br></br>
                <h3>About our Company</h3>
                <br></br>
                <p style={{textAlign:'justify',padding:'3%'}} className='descImg'>" We work hard to bring changes in Transportation "<br></br><br></br>
                Over 50 years later a Mercedes-Benz model once again bore the legendary “Kompressor” badge, clearly visible and written in full on the boot lid. In September 1995 Mercedes-Benz updated the C-Class 202 model series, causing something of a stir with its supercharged model type, the 230 Kompressor. It was manufactured with one eye already on the compact Mercedes-Benz SLK roadster, which would be launched six months later. At the same time, a smaller two-litre supercharged engine went into production, initially for models for export and later used in all markets.
                </p>

                </Col>
                </Row>

  <Row>
    <Col sm={12}>
    <h4 style={{textAlign: 'justify',padding: '1% 15%'}}>FOUNDER & HEADQUATER</h4>
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
                <br></br><br></br>
            </>
    );

}
export default Abouts;