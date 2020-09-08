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
        <div className="grid-container">
          <Router>
            <div className="Navbar">
              <Navbar />
            </div>
            <div className="Main">
              <Burger />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/portfolio' component={Portfolio} />
                  <Route exact path='/resume' component={Resume} />
                  <Route exact path='/technical-skills' component={TechnicalSkills} />
                  <Route exact path='/contact' component={Contact} />
                  <Route render={() => <h1 className="error fontMedium">Error: 404! Page not found. 😰</h1>} />
                </Switch>
              </React.Suspense>
            </div>
          </Router>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));