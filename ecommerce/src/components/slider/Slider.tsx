import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css';
import accessories from "../../assets/img/accessories.jpg";
import technology from "../../assets/img/technology.jpg";

export default function Slider() {
  return (
    <>
       <Carousel variant="dark" style={{maxHeight: "70vh"}}>
            <Carousel.Item>
                <img
                style={{height:"70vh"}}
                className="d-block w-100"
                src={accessories}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"70vh"}}
                className="d-block w-100"
                src={technology}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:"70vh"}}
                className="d-block w-100"
                src={technology}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
</Carousel>
    </>
  )
}
