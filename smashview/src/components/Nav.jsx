import React, { Component } from 'react';
import style from'./Nav-style.css';
import styled, { css } from 'styled-components';

const Navbar = styled.nav`
  background-color: rgb(174, 61, 184);
  color: white;
  font-size:1.5em;
`;

const NavItem = styled.li`
  text-align:center;
  width:80px;
  color:white;
  height: 100%;
  list-style-type: none;
  display: inline-block;
  padding:5px;
  &:hover{
    background-color:rgb(216, 121, 225);
  }
  
`;
const Link =  styled.a`
  text-decoration:none;
  color: white;
`;

class Nav extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Navbar>
        <NavItem><Link href='#'>Smash</Link></NavItem>
        <NavItem>
          hue
        </NavItem>
        <NavItem>
          hue
        </NavItem>
      </Navbar>
    );
  }
}


export default Nav;