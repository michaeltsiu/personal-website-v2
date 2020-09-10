import React from 'react';

export default function About() {
  return (
    <div className="about-main">
      <div className="about-text">
        <span className="about-picture"></span>
        <br/>
        <span className="about-title fontMedium">Hello! I'm</span>
        <div className="about-header fontLarge">Michael Siu <span style={{ color: 'rgb(235, 198, 104)' }}>A Software Engineer.</span></div>
        <div className="about-body fontSmall">I am a Software Engineer that is passionate about where the future in tech may lead us. I have always been intrigued by the way websites have worked and what little improvements I could make to create a better user experience. I love to program and see what I can create from a simple idea and turn it into something that I can show to all my family members, friends and colleagues.</div>
        <div className="signature fontLarge">Michael Siu</div>
      </div>
    </div>
  )
}