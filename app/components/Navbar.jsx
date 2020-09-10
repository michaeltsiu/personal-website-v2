import React from 'react';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngellist } from 'react-icons/fa';

let ref = React.createRef();

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
    // onClick={this.handleClick}
  }

  handleClick() {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-list">
          <div className="navbar-item fontSmall">
            <span className="highlight">01.</span> About
          </div>
          <div className="navbar-item fontSmall">
            <span className="highlight">02.</span> Work
          </div>
          <div className="navbar-item fontSmall">
            <span className="highlight">03.</span> Technical Skills
          </div>
          <div className="navbar-item fontSmall">
            <span className="highlight">04.</span> Contact
          </div>
          <a className="navbar-item fontSmall navbar-resume" target="_blank" href="./app/assets/Resume.pdf">
            Resume
          </a>
        </div>
      </div>
    )
  }
};