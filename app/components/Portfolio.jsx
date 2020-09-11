import React from 'react';

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
        <div className="header fontLarge">
          <span className="highlight">02.</span> Work
        </div>
        <div>
          <ul className="portfolio-title fontMedium">
            <li
              className={this.state.category == 'hire-mee' ? 'portfolio-active' : ''}
              onClick={() => this.changePage("hire-mee")}>
              01. Hire-Mee
              </li>
            <li
              className={this.state.category == 'system-design' ? 'portfolio-active' : ''}
              onClick={() => this.changePage("system-design")}>
              02. System Design
              </li>
            <li
              className={this.state.category == 'ecommerce' ? 'portfolio-active' : ''}
              onClick={() => this.changePage("ecommerce")}>
              03. E-Commerce clone
              </li>
          </ul>
        </div>
        <div>
          {this.currentPage()}
        </div>
      </div>
    )
  }
}

export default Portfolio