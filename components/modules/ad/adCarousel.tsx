import React from "react";
import { Carousel } from "react-bootstrap";

type AdProps = {
  label: string;
};

const Ad = ({ label }: AdProps) => {
  const smSrc = "https://via.placeholder.com/400x300?text=400x300+Ad+" + label;
  const mdSrc = "https://via.placeholder.com/720x300?text=720x300+Ad+" + label;
  const lgSrc = "https://via.placeholder.com/900x300?text=900x300+Ad+" + label;
  const xlSrc =
    "https://via.placeholder.com/1200x300?text=1200x300+Ad+" + label;
  return (
    <div className="text-center">
      <picture>
        <source srcSet={xlSrc} media="(min-width:1200px)" />
        <source srcSet={lgSrc} media="(min-width:900px)" />
        <source srcSet={mdSrc} media="(min-width:720px)" />
        <img className="img-fluid" src={smSrc} alt={"slide " + label} />
      </picture>
    </div>
  );
};

const AdCarousel = () => {
  const carouselStyle = {
    width: `100%`,
  };

  return (
    <Carousel controls={false} indicators={false} style={carouselStyle}>
      <Carousel.Item>
        <Ad label="A" />
      </Carousel.Item>
      <Carousel.Item>
        <Ad label="B" />
      </Carousel.Item>
      <Carousel.Item>
        <Ad label="C" />
      </Carousel.Item>
      <Carousel.Item>
        <Ad label="D" />
      </Carousel.Item>
    </Carousel>
  );
};

export default AdCarousel;
