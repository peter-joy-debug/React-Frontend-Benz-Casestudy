import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider_1 from "../slider/v2.jpg";
import slider_2 from "../slider/v1.jpg";
import slider_3 from "../slider/v3.jpg";
  function Slider()
  {
    return (

 <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider_1}
      alt="First slide"
      height="500"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider_3}
      alt="Second slide"
      height="500"

    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider_2}
      alt="Third slide"
      height="500"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 

    );
}

export default Slider;

