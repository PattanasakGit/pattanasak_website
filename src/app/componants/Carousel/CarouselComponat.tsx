import React, { useState, useEffect } from 'react';
import './CarouselCSS.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    setPrevIndex((currentIndex - 1 + images.length) % images.length);
    setNextIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="CarouselStyle">
        <div className='CarouselStyle_IMG'>
            <img src={images[prevIndex]} alt="Carousel" className='prevImg'/>
            <img src={images[currentIndex]} alt="Carousel" className='currentImg'/>
            <img src={images[nextIndex]} alt="Carousel" className='nextImg'/>
        </div>
        <div className='CarouselStyle_BTN'>
            <button onClick={goToPrevious}> {'<-'} </button>
            <button onClick={goToNext}> {'->'} </button>
        </div>
    </div>
  );
};

export default Carousel;