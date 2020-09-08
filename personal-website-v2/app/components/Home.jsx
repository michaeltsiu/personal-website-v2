import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplaySpeed: 5000
};

export default function Home() {
  return (
    <div className="home-main">
      <div className="home-text">
        <span className=" home-burger navbar-picture"></span>
        <br/>
        <span className="home-title fontMedium">Hello! I'm</span>
        <div className="home-header fontLarge">Michael Siu <span style={{ color: 'rgb(235, 198, 104)' }}>A Software Developer.</span></div>
        <div className="home-body fontSmall">I am a Software Engineer that is passionate about where the future in tech may lead us. I have always been intrigued by the way websites have worked and what little improvements I could make to create a better user experience. I love to program and see what I can create from a simple idea and turn it into something that I can show to all my family members, friends and colleagues.</div>
        <div className="signature fontLarge">Michael Siu</div>
      </div>
    </div>
  )
}