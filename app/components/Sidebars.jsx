import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaAngellist } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

export default function Sidebars() {
  return (
    <div>
      <Fade bottom delay={1000}>
        <div className="leftbar">
          <a href='mailto:michaeltsiu13@gmail.com'>
            michaeltsiu13@gmail.com
          </a>
        </div>
      </Fade>
      <Fade bottom delay={1200}>
        <div className="rightbar">
          <a href='https://www.linkedin.com/in/michaeltsiu/' target="_blank">
            <FaLinkedin className="fontSmall" />
          </a>
          <a href='https://angel.co/u/michaeltsiu' target="_blank">
            <FaAngellist className="fontSmall" />
          </a>
          <a href='https://github.com/michaeltsiu' target="_blank">
            <FaGithub className="fontSmall" />
          </a>
          <a href='https://www.instagram.com/michaeltsiu/' target="_blank">
            <FaInstagram className="fontSmall" />
          </a>
        </div>
      </Fade>
    </div>
  )
}