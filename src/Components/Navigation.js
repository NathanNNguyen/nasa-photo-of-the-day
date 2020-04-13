import React from 'react';
import styled from 'styled-components';

const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.a`
  text-transform: capitalize;
  text-decoration: none;
  color: black;
  margin: 2rem;
  font-size: 1rem;
  transition: .3s all;
  border: .1rem black dotted;
  border-radius: 1rem;
  padding: .3rem;
  &:hover{
    transform: translateY(-.2rem)
  }
`;

const Nav = () => {
  return (
    <NavDiv>
      <NavItem href='#'>Home</NavItem>
      <NavItem href='https://nathannguyen.netlify.com/' target='_blank'>About me</NavItem>
      {/* <span role='img' aria-label='dog'>🐶</span> */}
    </NavDiv>
  )
}
export default Nav