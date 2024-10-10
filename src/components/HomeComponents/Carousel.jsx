import React, { Component } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel1 from '../../assets/caroudel1.avif';
import Carousel2 from '../../assets/carousel2.avif';
import Carousel3 from '../../assets/carousel3.avif';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const MyCarousel = () => {
  return (
    <ErrorBoundary>
      <ResponsiveCarousel 
        autoPlay 
        interval={2000} 
        showThumbs={false} 
        infiniteLoop 
        showArrows={true}
        stopOnHover={true}
      >
        <div>
          <img src={Carousel1} alt="Furniture" className='h-[50vh] md:h-[70vh] w-full object-cover' />
          
        </div>
        <div>
          <img src={Carousel2} alt="Layout" className='h-[50vh]  md:h-[70vh] w-full object-cover' />
          
        </div>
        <div>
          <img src={Carousel3} alt="Globe" className='h-[50vh]  md:h-[70vh] w-full object-cover' />
        </div>
      </ResponsiveCarousel>
    </ErrorBoundary>
  );
};

export default MyCarousel;
