import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

export function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100 "
          src="https://cdn.pnj.io/images/promo/194/tab_sale_chung_t12_-_1972x640-CTA.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          {/* <h3>Legend 1</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="https://cdn.pnj.io/images/promo/196/qua-tang-12-23-1972x640CTA.png"
          alt="Slide 2"
        />
        <Carousel.Caption>
          {/* <h3>Legend 2</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image d-block w-100"
          src="https://locphuc.com.vn/Content/Images/Event/SlideBanner2_PC.jpg"
          alt="Slide 3"
        />
        <Carousel.Caption>
          {/* <h3>Legend 3</h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}