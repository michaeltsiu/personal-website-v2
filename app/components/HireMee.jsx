import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function HireMee() {
  return (
    <div className="portfolio-body">
      <video className="portfolio-video" src="https://michael-siu-portfolio.s3-us-west-1.amazonaws.com/Hire-mee_Overview.mp4" alt="VIDEO NOT FOUND" loop="loop" autoPlay="autoplay" />
      <div className="portfolio-tech fontSmall">
        <div>
          <a href="https://reactjs.org/" target="_blank">React</a> | <a href="https://reactrouter.com/" target="_blank">React Router</a> | <a href="https://expressjs.com/" target="_blank">Express</a> | <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> | <a href="https://nodejs.org/" target="_blank">Node.JS</a>
          <span className="portfolio-icon">
          <a href='https://github.com/hire-mee/hire-mee' target="_blank">
            <FaGithub className="fontMedium" />
          </a>
        </span>
        </div>
      </div>

      <div className="portfolio-summary fontSmall">
        A web application that provides an organized space for job seekers to input information about submitted job applications.
      </div>

    </div>
  )
};