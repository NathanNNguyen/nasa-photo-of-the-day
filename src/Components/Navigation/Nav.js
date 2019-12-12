import React from 'react';
import NavDiv from './NavDiv'
import NavItem from './NavItem'

const Nav = () => {
  return (
    <NavDiv>
      <NavItem href='#'>Home</NavItem>
      <NavItem href='#'>About me</NavItem>
      <NavItem href='#'>Contact</NavItem>
    </NavDiv>
  )
}

export default Nav