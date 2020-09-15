import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngellist } from 'react-icons/fa';

let ref = React.createRef();

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link
        className="navbar-logo"
        to="landing"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <img src="/app/assets/Logo.png"></img>
      </Link>
      <div className="navbar-list">
        <Fade top>
          <Link
            className="navbar-item fontSmall"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-500}
            duration={500}
          >
            <span className="highlight">01.</span> About
            </Link>
        </Fade>
        <Fade top delay={200}>
          <Link
            className="navbar-item fontSmall"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
          >
            <span className="highlight">02.</span> Work
            </Link>
        </Fade>
        <Fade top delay={400}>
          <Link
            className="navbar-item fontSmall"
            activeClass="active"
            to="tech"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            <span className="highlight">03.</span> Technical Skills
            </Link>
        </Fade>
        <Fade top delay={600}>
          <Link
            className="navbar-item fontSmall"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-500}
            duration={500}
          >
            <span className="highlight">04.</span> Contact
            </Link>
        </Fade>
        <Fade top delay={800}>
          <a className="fontSmall highlight navbar-item navbar-resume" target="_blank" href="./app/assets/Resume.pdf">
            Resume
            </a>
        </Fade>
      </div>
    </div>
  )
}