import React, { useState, useEffect } from "react";

function SlideImage({ interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'images/1.png',
    'images/2.png'
  ]
  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex, images, interval]);

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <style>
        {`
          .carousel-image {
            margin-top:10px;
            padding:10px;
            height: 500px; /* Adjust the desired height */
            object-fit: cover;
          }
        `}
      </style>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === activeIndex ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="d-block w-100 carousel-image"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={prevSlide}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={nextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default SlideImage;
