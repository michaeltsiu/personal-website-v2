import React from 'react';
import { Link } from 'react-scroll';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngellist } from 'react-icons/fa';

let ref = React.createRef();

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="navbar-container">
        <img src="/app/assets/Logo.png"></img>
        <div className="navbar-list">
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
            <a className="fontSmall highlight navbar-item navbar-resume" target="_blank" href="./app/assets/Resume.pdf">
              Resume
            </a>
        </div>
      </div>
    )
  }
};