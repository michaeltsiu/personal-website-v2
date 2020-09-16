import './dist/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import { FaGithub, FaLinkedin, FaInstagram, FaAngellist, FaEnvelope } from 'react-icons/fa';
import Navbar from './components/Navbar.jsx';
import Loading from './components/Loading.jsx';
import Sidebars from './components/Sidebars.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import TechnicalSkills from './components/TechnicalSkills.jsx';
import Contact from './components/Contact.jsx';
import Burger from './components/Burger.jsx';

// const About = React.lazy(() => import('./components/About.jsx'));
// const Portfolio = React.lazy(() => import('./components/Portfolio.jsx'));
// const TechnicalSkills = React.lazy(() => import('./components/TechnicalSkills.jsx'));
// const Contact = React.lazy(() => import('./components/Contact.jsx'));
// const Burger = React.lazy(() => import('./components/Burger.jsx'));

export default function App() {
  return (
    <React.Fragment>
      <div className="Container">
        <Navbar />
        <Landing />
        <Sidebars />
        <div className="Main">
          <div className="Content">
            <Burger />
          </div>
          <div className="Content">
            <About />
          </div>
          <div className="Content">
            <Portfolio />
          </div>
          <div className="Content">
            <TechnicalSkills />
          </div>
          <div className="Content">
            <Contact />
          </div>
          <div className="bottomLink">
            <Fade delay={500}>
              <Link
                to="landing"
                spy={true}
                smooth={true}
                duration={500}
              > SCROLL TO THE TOP
              </Link>
            </Fade>
            <br />
            <Fade bottom delay={200}>
              <div className="bottombar">
                <a href='https://www.linkedin.com/in/michaeltsiu/' target="_blank">
                  <FaLinkedin className="fontSmall" />
                </a>
                <a href='https://angel.co/u/michaeltsiu' target="_blank">
                  <FaAngellist className="fontSmall" />
                </a>
                <a href='https://github.com/michaeltsiu' target="_blank">
                  <FaGithub className="fontSmall" />
                </a>
                <a href='mailto:michaeltsiu13@gmail.com'>
                  <FaEnvelope className="fontSmall" />
                </a>
                <a href='https://www.instagram.com/michaeltsiu/' target="_blank">
                  <FaInstagram className="fontSmall" />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));