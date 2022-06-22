import React from "react";
import Card from "./Card";
import Modal from 'react-bootstrap/Modal'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import carB from "../images/product/b_12.png";
import {Products} from "../data/Products";
import { engine_data } from "../data/engine_desc";
import '../App.css';
import Container from "react-bootstrap/esm/Container";
function Product()
{
    return(
        <Container >
            <br></br>
            <Row>
                {Products.map((item)=>(<><Col style={{margin:'0px 2% 0px 0px'}} sm={3}><Card Title={item.title} Image={item.urlImage} Desc={item.shortDesc} Price={item.price} Date={item.date} id={item.id} EngineEngine={item.engine_info.engine} EngineInterior={item.engine_info.interior} EngineExterior={item.engine_info.exterior} Manufacturer={item.manufactured} RatingClient={item.rating.map(s => (<li>{s.client}</li>))} RatingIndustry={item.rating.map(s => (<li>{s.manufacture}</li>))} Vid={item.additional}/><br></br></Col><br></br><br></br></>))}
            </Row>
        </Container>
    );

}
export default Product;