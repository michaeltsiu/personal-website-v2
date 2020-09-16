import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';

export default function Landing() {
  return (
    <div className="landing-main" id='landing'>
      <Fade delay={200}>
        <div className="landing-small">Hi, my name is</div>
      </Fade>
      <Fade delay={250}>
        <div className="landing-big">Michael Siu.</div>
      </Fade>
      <Fade delay={350}>
        <div className="landing-medium"> I am {" "}
          <span style={{ color: '#77eebe' }}>
            <ReactTypingEffect
              speed={20}
              eraseDelay={750}
              typingDelay={750}
              text={["a Software Engineer.", "passionate about web design.", "looking for my next adventure."]}
            />
          </span>
        </div>
      </Fade>
    </div>
  )
}