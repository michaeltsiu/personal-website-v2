import React from 'react';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <div className="about-main" id="about">
      <div className="about-text">
        <Fade delay={200}>
          <div className="header fontLarge">
            <span className="highlight">01.</span>About Me
          </div>
        </Fade>
        <Fade delay={250}>
          <span className="about-picture"></span>
          <br />
        </Fade>
        <Fade delay={300}>
          <div className="about-body fontSmall">I am a Software Engineer that is passionate about where the future in tech may lead us. I have always been intrigued by the way websites have worked and what little improvements I could make to create a better user experience. I love to program and see what I can create from a simple idea and turn it into something that I can show to all my family members, friends and colleagues.</div>
        </Fade>
        <Fade delay={350}>
          <div className="signature fontLarge">Michael Siu</div>
        </Fade>
      </div>
    </div>
  )
}