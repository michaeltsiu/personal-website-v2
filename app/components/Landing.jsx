import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function Landing() {
  return (
    <div className="landing-main">
      <div className="landing-small">Hi, my name is</div>
      <div className="landing-big">Michael Siu.</div>
      <div className="landing-big">I build things for the web.</div>
      <div className="landing-small">
        <ReactTypingEffect
          staticText={'I am a'}
          speed={50}
          eraseDelay={2000}
          typingDelay={1000}
          text={["Software Engineer.", "booty.", "gamer."]}
        />
      </div>
    </div>
  )
}