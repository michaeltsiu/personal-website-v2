import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Loading from './components/Loading.jsx';

import Home from './components/Home.jsx';
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
            <div><Burger /></div>
            <div><Home /></div>
            <div><Portfolio /></div>
            <div><Resume /></div>
            <div><TechnicalSkills /></div>
            <div><Contact /></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));