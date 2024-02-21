import React from 'react';
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.png";
import { Carousel } from 'antd';

function HeroSection() {
  const contentStyle = {
    height: "70vh",
    width: "100%",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  // Media query for screens smaller than 768px
  if (window.matchMedia("(max-width: 768px)").matches) {
    contentStyle.height = "25vh"; // Example: Changing height for smaller screens
    contentStyle.lineHeight = '120px'; // Example: Changing lineHeight for smaller screens
  }

  return (
    <Carousel autoplay>
      <div>
        <img src={slide1} style={contentStyle} alt="Slide 1" />
      </div>
      <div>
        <img src={slide2} style={contentStyle} alt="Slide 2" />
      </div>
      <div>
        <img src={slide1} style={contentStyle} alt="Slide 3" />
      </div>
      <div>
        <img src={slide2} style={contentStyle} alt="Slide 4" />
      </div>
    </Carousel>
  );
}

export default HeroSection;
