import React, { useState, useEffect, useRef } from "react";
import "../css/Carousel.css";

const Carousel = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const handleUpClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + product?.images.length) % product?.images.length
    );
  };

  const handleDownClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product?.images.length);
  };
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const carouselDiv = carouselRef.current;
    const activeImage = carouselDiv.children[currentIndex];
    activeImage?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentIndex]);

  return (
    <div className="first-div">
      <div className="imgSection">
        <img
          src={product?.images[currentIndex].url}
          alt="Current Product"
          aria-live="polite"
        />
      </div>
      <div className="carouselSection">
        <span aria-label="Next Image" className="up" onClick={handleUpClick}>
          <svg
            enableBackground="new 0 0 32 32"
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              className="arrow"
              d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
              fill="#808080"
            />
          </svg>
        </span>
        <div className="carousel-div" ref={carouselRef}>
          {product?.images.map((image, index) => (
            <li
              className={`littleImages ${
                index === currentIndex ? "active" : ""
              }`}
              key={index}
              onClick={() => handleImageClick(index)}
              aria-label={`Image ${index + 1}`}
              role="button"
              tabIndex="0"
            >
              <img
                className="hideBG"
                src={image.url}
                alt={`Product ${index}`}
              />
            </li>
          ))}
        </div>
        <span
          aria-label="Previous Image"
          className="down"
          onClick={handleDownClick}
        >
          <svg
            enableBackground="new 0 0 32 32"
            height="32px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              className="arrow"
              d="M14.77,23.795L5.185,14.21c-0.879-0.879-0.879-2.317,0-3.195l0.8-0.801c0.877-0.878,2.316-0.878,3.194,0  l7.315,7.315l7.316-7.315c0.878-0.878,2.317-0.878,3.194,0l0.8,0.801c0.879,0.878,0.879,2.316,0,3.195l-9.587,9.585  c-0.471,0.472-1.104,0.682-1.723,0.647C15.875,24.477,15.243,24.267,14.77,23.795z"
              fill="#808080"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Carousel;
