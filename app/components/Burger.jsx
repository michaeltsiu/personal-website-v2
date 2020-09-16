import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 99;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'snow' : '#77eebe'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.25s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const StyleList = styled.div`
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(200%)'};
  top: 0;
  left: 0;
  height: 100vh;
  width: 50vw;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 98;
`;

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="navbar-burger">
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyleList open={open}>
      <div className="navbar-list">
          <Link
            className="navbar-item fontSmall"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setOpen(!open)}
          >
            <span className="highlight">01.</span> About
          </Link>
          <Link
            className="navbar-item fontSmall"
            to="work"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setOpen(!open)}
          >
            <span className="highlight">02.</span> Work
          </Link>
          <Link
            className="navbar-item fontSmall"
            to="tech"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setOpen(!open)}
          >
            <span className="highlight">03.</span> Technical Skills
          </Link>
          <Link
            className="navbar-item fontSmall"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => setOpen(!open)}
          >
            <span className="highlight">04.</span> Contact
          </Link>
            <a className="fontSmall highlight navbar-item navbar-resume" target="_blank" href="https://michael-siu-portfolio.s3-us-west-1.amazonaws.com/Resume.pdf">
              Resume
            </a>
        </div>
      </StyleList>
    </div>
  )
}

export default Burger