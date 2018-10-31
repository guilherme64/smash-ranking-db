import React, { Component } from 'react';
import style from'./Nav-style.css';
import styled, { css } from 'styled-components';

const Navbar = styled.nav`
  background-color: #DC3D59;
  color: white;
  font-size:1.5em;
  font-family: sans-serif;
`;

const NavItem = styled.li`
  text-align:center;
  width:150px;
  color:white;
  height: 100%;
  list-style-type: none;
  display: inline-block;
  padding:5px;
  &:hover{
    background-color:rgb(210, 47, 77);
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
        <NavItem><Link href='#'>Jogadores</Link></NavItem>
        <NavItem><Link href='#'>Campeonatos</Link></NavItem>
      </Navbar>
    );
  }
}


export default Nav;