import React from 'react';
import Fade from 'react-reveal/Fade';

import { Icon, InlineIcon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import reactRouter from '@iconify/icons-logos/react-router';
import html5 from '@iconify/icons-logos/html-5';
import css3 from '@iconify/icons-logos/css-3';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';

import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import expressIcon from '@iconify/icons-logos/express';
import fileTypeMongo from '@iconify/icons-vscode-icons/file-type-mongo';
import mysqlIcon from '@iconify/icons-logos/mysql';

import fileTypeMysql from '@iconify/icons-vscode-icons/file-type-mysql';
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import fileTypeNginx from '@iconify/icons-vscode-icons/file-type-nginx';

import gitIcon from '@iconify/icons-logos/git-icon';
import npmIcon from '@iconify/icons-logos/npm';
import webpackIcon from '@iconify/icons-logos/webpack';
import babelIcon from '@iconify/icons-logos/babel';
import awsEc2 from '@iconify/icons-logos/aws-ec2';
import loaderIcon from '@iconify/icons-logos/loader';

export default function TechnicalSkills() {
  return (
    <div id="tech">
      <Fade delay={200}>
        <div className="header fontLarge">
          <span className="highlight">03.</span> Technical Skills
        </div>
      </Fade>
      <div className="tech-list">
        <div>
          <Fade delay={250}>
            <h1 className="tech-cat fontMedium">Front-End</h1>
            <ul className="tech-item fontSmall">
              <li>
                <a href="https://www.javascript.com/" target="_blank">
                  <div><Icon icon={javascriptIcon} /></div>
                  Javascript
                </a>
              </li>
              <li>
                <a href="https://reactjs.org/" target="_blank">
                  <div><Icon icon={reactIcon} /></div>
                  React
                </a>
              </li>
              <li>
                <a href="https://reactrouter.com/" target="_blank">
                  <div><Icon icon={reactRouter} /></div>
                  React Router
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                  <div><Icon icon={html5} /></div>
                  HTML5
                </a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                  <div><Icon icon={css3} /></div>
                  CSS3
                </a>
              </li>
              <li>
                <a href="https://getbootstrap.com/" target="_blank">
                  <div><Icon icon={bootstrapIcon} /></div>
                  Bootstrap
                </a>
              </li>
            </ul>
          </Fade>

        </div>
        <div>
          <Fade delay={300}>
            <h1 className="tech-cat fontMedium">Back-End</h1>
            <ul className="tech-item fontSmall">
              <li>
                <a href="https://nodejs.org/" target="_blank">
                  <div><Icon icon={nodejsIcon} /></div>
                  Node.JS
                </a>
              </li>
              <li>
                <a href="https://expressjs.com/" target="_blank">
                  <div><Icon icon={expressIcon} color='white'/></div>
                  Express
                </a>
              </li>
              <li>
                <a href="https://www.mongodb.com/" target="_blank">
                  <div><Icon icon={fileTypeMongo} /></div>
                  MongoDB
                </a>
              </li>
              <li>
                <a href="https://www.mysql.com/" target="_blank">
                  <div><Icon icon={fileTypeMysql} /></div>
                  MySQL
                </a>
              </li>
              <li>
                <a href="https://www.postgresql.org/" target="_blank">
                  <div><Icon icon={postgresqlIcon} /></div>
                  PostgreSQL
                </a>
              </li>
              <li>
                <a href="https://www.nginx.com/" target="_blank">
                  <div><Icon icon={fileTypeNginx} /></div>
                  NGINX
                </a>
              </li>
            </ul>
          </Fade>

        </div>
        <div>
          <Fade delay={350}>
            <h1 className="tech-cat fontMedium">Others</h1>
            <ul className="tech-item fontSmall">
              <li>
                <a href="https://git-scm.com/" target="_blank">
                  <div><Icon icon={gitIcon} /></div>
                  Git
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/" target="_blank">
                  <div><Icon icon={npmIcon} /></div>
                  NPM
                </a>
              </li>
              <li>
                <a href="https://webpack.js.org/" target="_blank">
                  <div><Icon icon={webpackIcon} /></div>
                  Webpack
                </a>
              </li>
              <li>
                <a href="https://babeljs.io/" target="_blank">
                  <div><Icon icon={babelIcon} /></div>
                  Babel
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com/ec2/" target="_blank">
                  <div><Icon icon={awsEc2} /></div>
                  AWS EC2
                </a>
              </li>
              <li>
                <a href="https://loader.io/" target="_blank">
                  <div><Icon icon={loaderIcon} /></div>
                  Loader.io
                </a>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  )
}