import React, { createRef } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Ecommerce() {
  return (
    <div className="portfolio-body">
      <video className="portfolio-video" src="https://michael-siu-portfolio.s3-us-west-1.amazonaws.com/Ecommerce-Overview.mp4" alt="VIDEO NOT FOUND" loop="loop" autoPlay="autoplay" />
      <div className="portfolio-tech fontSmall">
        <div>
          <a href="https://reactjs.org/" target="_blank">React</a> | <a href="https://expressjs.com/" target="_blank">Express</a> | <a href="https://www.mysql.com/" target="_blank">MySQL</a> | <a href="https://nodejs.org/" target="_blank">Node.JS</a> | <a
            href="https://aws.amazon.com/ec2/" target="_blank">AWS EC2</a> | <a href="https://aws.amazon.com/s3/" target="_blank">AWS S3</a>
          <span className="portfolio-icon">
            <a href='https://github.com/proj-plus-ultra/fenty-recommended' target="_blank">
              <FaGithub className="fontMedium" />
            </a>
          </span>
        </div>
      </div>

      <div className="portfolio-summary fontSmall">
        A clone of Fenty Beauty's product related page with dynamically rendered items that pertain to a specific category.
        </div>

    </div>
  )
};