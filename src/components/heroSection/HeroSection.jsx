import React from 'react'
import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.png"

import { Carousel } from 'antd';

const contentStyle = {
  height: "70vh",
  width:"100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function HeroSection() {



  return (
    <Carousel autoplay>
    <div>
      <img src={slide1}  style={contentStyle} />
      
    </div>
    <div>
    <img src={slide2}  style={contentStyle} />
    </div>
    <div>
    <img src={slide1}  style={contentStyle} />

    </div>
    <div>
    <img src={slide2}  style={contentStyle} />

    </div>
  </Carousel>
  )
}

export default HeroSection