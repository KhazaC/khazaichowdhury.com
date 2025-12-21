import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Homepage.css";

function Homepage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-1.jpg`,
    `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali.jpg`,
    `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-3.jpg`,
    `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-4.jpg`,
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1400, min: 1024 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="homepage">
      <div className="carousel-section">
        <Carousel
          arrows={true}
          infinite={true}
          centerMode={isDesktop}
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
