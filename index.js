import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * EternalShadowCarousel component displays a carousel of images with a unique eternal shadow effect.
 * @param {Object} props - Component props
 * @param {string[]} props.images - An array of image URLs to be displayed in the carousel
 * @param {number} [props.interval=5000] - Interval between slides in milliseconds
 * @param {boolean} [props.autoPlay=true] - Whether to automatically play the carousel
 */
function EternalShadowCarousel({ images, interval = 5000, autoPlay = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      interval={interval}
      autoPlay={autoPlay}
      selectedItem={currentIndex}
      onChange={handleSlideChange}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

EternalShadowCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
  autoPlay: PropTypes.bool,
};

export default EternalShadowCarousel;
