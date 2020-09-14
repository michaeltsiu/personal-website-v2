import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import Navbar from './components/Navbar.jsx';
import Loading from './components/Loading.jsx';
import Sidebars from './components/Sidebars.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import TechnicalSkills from './components/TechnicalSkills.jsx';
import Contact from './components/Contact.jsx';
import Burger from './components/Burger.jsx';

// const Home = React.lazy(() => import('./components/Home.jsx'));
// const Portfolio = React.lazy(() => import('./components/Portfolio.jsx'));
// const TechnicalSkills = React.lazy(() => import('./components/TechnicalSkills.jsx'));
// const Contact = React.lazy(() => import('./components/Contact.jsx'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="Container">
          <Navbar />
          <Landing />
          <Sidebars />
          <div className="Main">
            <Burger />
            <div className="Content">
              <Fade bottom>
                <About />
              </Fade>
            </div>
            <div className="Content">
              <Fade bottom>
                <Portfolio />
              </Fade>
            </div>
            <div className="Content">
              <Fade bottom>
                <TechnicalSkills />
              </Fade>
            </div>
            <div className="Content">
              <Fade bottom>
                <Contact />
              </Fade>
            </div>
            <div className="bottomLink">
              <Link
              to="landing"
              spy={true}
              smooth={true}
              duration={500}
            > SCROLL TO THE TOP
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));