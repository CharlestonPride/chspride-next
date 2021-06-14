import React, { useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";

const AdCarousel = () => {
  const carouselStyle = {
    // width: `100%`,
    // maxWidth: `900px`,
    // margin: `auto`,
    height: `250px`,
  };
  return (
    <Container>
      <Carousel controls={false} indicators={false} style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block m-auto"
            src="https://via.placeholder.com/900x200/0000FF/808080?text=900x200+Ad+3"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-inline-block w-50"
            src="https://via.placeholder.com/450x200?text=900x200+Ad+2+A"
            alt="Second slide"
          />
          <img
            className="d-inline-block w-50"
            src="https://via.placeholder.com/450x200?text=900x200+Ad+2+B"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto"
            src="https://via.placeholder.com/900x200?text=900x200+Ad+3"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default AdCarousel;
