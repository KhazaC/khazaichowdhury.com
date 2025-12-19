import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Homepage.css";

function Homepage() {
  const images = [
    "/assets/Personal Favorites/cali-1.jpg",
    "/assets/Personal Favorites/cali.jpg",
    "/assets/Personal Favorites/cali-3.jpg",
    "/assets/Personal Favorites/cali-4.jpg",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  return (
    <div className="homepage">
      <div className="carousel-section">
        <Carousel
          arrows={true}
          infinite={true}
          centerMode={true}
          focusOnSelect={true}
          keyBoardControl={true}
          swipeable={true}
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {images.map((src, index) => (
            <img src={src} alt={`Slide ${index + 1}`} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Homepage;
