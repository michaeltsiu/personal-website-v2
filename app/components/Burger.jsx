import React, { useState } from 'react';
import styled from 'styled-components';

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
    background-color: ${({ open }) => open ? '#77eebe' : 'snow'};
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
          <div className="navbar-item" onClick={() => setOpen(!open)}>
              Home
          </div>
          <div className="navbar-item" onClick={() => setOpen(!open)}>
              Portfolio
          </div>
          <div className="navbar-item" onClick={() => setOpen(!open)}>
              Resume
          </div>
          <div className="navbar-item" onClick={() => setOpen(!open)}>
              Technical Skills
          </div>
          <div className="navbar-item" onClick={() => setOpen(!open)}>
              Contact
          </div>
        </div>
      </StyleList>
    </div>
  )
}

export default Burger