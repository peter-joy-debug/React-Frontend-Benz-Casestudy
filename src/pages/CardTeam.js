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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHands,faProcedures,faUsers,faPhone,faCog } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faFacebook,faInstagram,faYoutube,faPinterest} from "@fortawesome/free-brands-svg-icons";
function CardTeam(props)
{
    return(
        
        <Card style={{ width: '18rem',margin:'1%'}} className="prodName">
  <Card.Img variant="top" src={props.ImageUser} style={{width:'100%',height:'350px',padding:'3% 0px'}}/>
  <Card.Body>
    <Card.Title>{props.TitleUser}</Card.Title>
    <Card.Text>
      <p>{props.DescUser}</p>
    </Card.Text>
    <Card.Text>
      <p>{props.PostUser}</p>
    </Card.Text>

    {/* <Link variant="dark" to={`/detailproduct/${props.id}`} params={props.id}>View Product</Link> */}
  </Card.Body>
  <Card.Footer variant="bottom">
  <Card.Text>
  <span><FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faInstagram} /></span>
   </Card.Text>
  </Card.Footer>
</Card>

    );
}
export default CardTeam;