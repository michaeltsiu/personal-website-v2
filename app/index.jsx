import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Navbar from './components/Navbar.jsx';
import Loading from './components/Loading.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Resume from './components/Resume.jsx';
import TechnicalSkills from './components/TechnicalSkills.jsx';
import Contact from './components/Contact.jsx';
import Burger from './components/Burger.jsx';

// const Home = React.lazy(() => import('./components/Home.jsx'));
// const Portfolio = React.lazy(() => import('./components/Portfolio.jsx'));
// const Resume = React.lazy(() => import('./components/Resume.jsx'));
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
          <div className="Main">
            <Burger />
            <Landing />
            <Fade bottom>
              <About />
            </Fade>
            <Fade bottom>
              <Portfolio />
            </Fade>
            <Fade bottom>
              <Resume />
            </Fade>
            <Fade bottom>
              <TechnicalSkills />
            </Fade>
            <Fade bottom>
              <Contact />
            </Fade>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));