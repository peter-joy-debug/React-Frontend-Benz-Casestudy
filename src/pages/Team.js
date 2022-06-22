import React from "react";
import CardTeam from "./CardTeam";
import Modal from 'react-bootstrap/Modal'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import carB from "../images/product/b_12.png";
import {Teams} from "../data/teams";
import { engine_data } from "../data/engine_desc";
import '../App.css';
import Container from "react-bootstrap/esm/Container";
function Product()
{
    return(
        <Container >
            <Row>
                <Col>
                <h3>Meet our team</h3>
                <p>" We work hard to bring changes in manufacturing "</p>
                </Col>
            </Row>
            <br></br>
            <Row>
                {Teams.map((item)=>(<><Col style={{margin:'0px 2% 0px 0px'}} sm={3}><CardTeam ImageUser={item.urlImage} TitleUser={item.title} DescUser={item.shortDesc} PostUser={item.post}/><br></br></Col><br></br><br></br></>))}
            </Row>
        </Container>
    );

}
export default Product;