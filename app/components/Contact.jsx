import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Contact () {
  return (
    <div id="contact">
      <Fade delay={250}>
        <div className="header fontLarge">
          <span className="highlight">04.</span> Contact
        </div>
      </Fade>
      <Fade delay={350}>
        <div className="contact-main fontSmall">
          <div>Feel free to get in touch whether you have a question or just want to say hi and I will try to get back to you as soon as I can!</div>
        </div>
        <div>
        <br/><br/>
        <a className="navbar-resume" href='mailto:michaeltsiu13@gmail.com'>
          Say Hello!
        </a>
        <br></br><br></br>
        </div>
      </Fade>
    </div>
  )
}