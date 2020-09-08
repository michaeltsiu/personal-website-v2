import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Resume() {
  return (
    <div>
      <div className="header fontLarge">Resume</div>
      <div className="resume-container">
          <a target="_blank" href="./app/assets/Resume.pdf">
            <img className="resume-img" src="./app/assets/Resume.png" />
          </a>

        {/* <a target="_blank" href="./app/assets/Resume.pdf">
          <img className="resume-img" src="https://michael-siu-resume.s3-us-west-2.amazonaws.com/Michael+Siu's+Resume.png"/>
        </a> */}
      </div>
    </div>
  )
}
