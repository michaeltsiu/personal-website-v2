import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function SystemDesign() {
  return (
    <div className="portfolio-main">

      <div className="portfolio-video">
        <img src="/app/assets/Portfolio/System-Design/System-Design_Overview.png" alt="IMAGE NOT FOUND" />
      </div>

      <div className="portfolio-tech fontSmall">
        <div>
          <a href="https://reactjs.org/" target="_blank">React</a> | <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> | <a href="https://aws.amazon.com/ec2/" target="_blank">AWS EC2</a> | <a href="https://loader.io/" target="_blank">Loader.io</a> | <a href="https://www.nginx.com/" target="_blank">NGINX</a>
          <span className="portfolio-icon">
            <a href='https://github.com/proj-minus-ultra/navbar-proxy' target="_blank">
              <FaGithub className="fontMedium" />
            </a>
          </span>
        </div>


      </div>

      <div className="portfolio-summary fontSmall">
        <p>Horizontally scaled system design on an inherited codebase with a goal to at least reach 2,000 client requests per second.</p>
        <br />
        <p>Achieved by being deployed on 4 AWS EC2 t2 micro instances capable of handling 10,579 client requests per second, 0% error rate and 61ms average response time. Load balanced and cached via NGINX.</p>
      </div>


    </div>
  )
};
