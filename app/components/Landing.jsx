import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function Landing() {
  return (
    <div className="landing-main">
      <div className="landing-small">Hi, my name is</div>
      <div className="landing-big">Michael Siu.</div>
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
    </div>
  )
}