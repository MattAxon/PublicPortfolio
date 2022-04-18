import React from "react";
import Carousel from "react-bootstrap/Carousel";
import IntelligenceThumbnail from '../media/IntelligenceThumbnail.png';
import solerevthumbnail from "../media/SoleRevThumbnail.PNG";
import filterbreakerThumbnail from "../media/spamfilterThumbnail.PNG";

function MyCarousel() {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item>
        <a href="https://intelligencedeploy.vercel.app/">
          <img
            className="d-block w-100"
            src={IntelligenceThumbnail}
            alt="First slide"
          />
        </a>
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Intelligence Community Report</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://filterbreaker.us-east-2.elasticbeanstalk.com/">
          <img
            className="d-block w-100"
            src={filterbreakerThumbnail}
            alt="Second slide"
          />
        </a>
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Filter Breaker</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <a href="http://solerevcustoms.com">
          <img
            className="d-block w-100"
            src={solerevthumbnail}
            alt="Third slide"
          />
        </a>
        <Carousel.Caption>
          <h3>SoleRev Customs Site</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
