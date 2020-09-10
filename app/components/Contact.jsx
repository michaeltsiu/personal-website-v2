import React from 'react';

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaAngellist } from 'react-icons/fa';

const activeStyle = {
  color: 'black'
}

export default function Contact () {
  return (
    <div>
      <div className="header fontLarge">04. Contact</div>
      <div className="contact-main fontSmall">
        <div>Feel free to get in touch by clicking any of the icons below:</div>
        <div>
        </div>
        <div className="icons">
            <a href='https://www.linkedin.com/in/michaeltsiu/' target="_blank">
              <FaLinkedin className="fontSmall" />
            </a>
            <a href='https://angel.co/u/michaeltsiu' target="_blank">
              <FaAngellist className="fontSmall"/>
            </a>
            <a href='https://github.com/michaeltsiu' target="_blank">
              <FaGithub className="fontSmall"/>
            </a>
            <a href='https://www.instagram.com/michaeltsiu/' target="_blank">
              <FaInstagram className="fontSmall"/>
            </a>
            <a href='mailto:michaeltsiu13@gmail.com'>
              <FaEnvelope className="fontSmall"/>
            </a>
          </div>
      </div>
    </div>
  )
}