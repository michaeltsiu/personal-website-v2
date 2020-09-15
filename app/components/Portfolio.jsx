import React from 'react';
import Fade from 'react-reveal/Fade';

import Ecommerce from './Ecommerce.jsx';
import SystemDesign from './SystemDesign.jsx';
import HireMee from './HireMee.jsx';

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'hire-mee'
    }
    this.changePage = this.changePage.bind(this);
    this.currentPage = this.currentPage.bind(this);
  }

  changePage(category) {
    this.setState({
      category: category
    })
  }

  currentPage() {
    if (this.state.category === 'ecommerce') {
      return (<Ecommerce />)
    } else if (this.state.category === 'system-design') {
      return (<SystemDesign />)
    } else if (this.state.category === 'hire-mee') {
      return (<HireMee />)
    }
  }

  render() {
    return (
      <div id="work">
        <Fade delay={250}>
          <div className="header fontLarge">
            <span className="highlight">02.</span> Work
          </div>
        </Fade>
        <div>
          <ul className="portfolio-title fontMedium">
            <Fade delay={350}>
              <li
                className={this.state.category == 'hire-mee' ? 'portfolio-active' : ''}
                onClick={() => this.changePage("hire-mee")}>
                01. Hire-Mee
              </li>
            </Fade>
            <Fade delay={450}>
              <li
                className={this.state.category == 'system-design' ? 'portfolio-active' : ''}
                onClick={() => this.changePage("system-design")}>
                02. System Design
              </li>
            </Fade>
            <Fade delay={550}>
              <li
                className={this.state.category == 'ecommerce' ? 'portfolio-active' : ''}
                onClick={() => this.changePage("ecommerce")}>
                03. E-Commerce clone
              </li>
            </Fade>
          </ul>
        </div>
        <div>
          <Fade delay={650}>
            {this.currentPage()}
          </Fade>
        </div>
      </div>
    )
  }
}

export default Portfolio