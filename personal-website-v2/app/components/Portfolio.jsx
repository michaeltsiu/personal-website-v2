import React from 'react';

import Ecommerce from './Ecommerce.jsx';
import SystemDesign from './SystemDesign.jsx';
import HireMee from './HireMee.jsx';

const activeStyle = {
  color: 'black'
}

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
      return (<div className="portfolio-cat">
        <Ecommerce />
      </div>)
    } else if (this.state.category === 'system-design') {
      return (<div className="portfolio-cat">
        <SystemDesign />
      </div>)
    } else if (this.state.category === 'hire-mee') {
      return (<div className="portfolio-cat">
        <HireMee />
      </div>)
    }
  }

  render() {
    return (
      <div>
        <div className="header fontLarge">
          <span>Portfolio</span>
        </div>
        <div>
            <ul className="portfolio-title fontMedium">
              <li
                className={this.state.category == 'hire-mee' ? 'portfolio-active' : ''}
                onClick={() => this.changePage("hire-mee")}>
                  Hire-Mee
              </li>
              <li
                className={this.state.category == 'system-design' ? 'portfolio-active' : ''}
                onClick={() => this.changePage("system-design")}>
                  System Design
              </li>
              <li
                className={this.state.category == 'ecommerce' ? 'portfolio-active' : ''}
                onClick={() => this.changePage("ecommerce")}>
                  E-Commerce clone
              </li>
            </ul>
          </div>
        <div>
          <div className="portfolio-body">
            {this.currentPage()}
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio