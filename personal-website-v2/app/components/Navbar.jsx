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
                Home
          </div>
          <div className="navbar-item fontSmall">
                Portfolio
          </div>
          <div className="navbar-item fontSmall">
                Resume
          </div>
          <div className="navbar-item fontSmall">
                Technical Skills
          </div>
          <div className="navbar-item fontSmall">
                Contact
          </div>
        </div>
      </div>
    )
  }
};