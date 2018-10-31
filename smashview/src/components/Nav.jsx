import React, { Component } from 'react';
import style from'./Nav-style.css';
import styled, { css } from 'styled-components';

const Navbar = styled.nav`
  background-color: rgb(174, 61, 184);
  height: 3em;
  color: white;
`;


const NavItem = styled.li`
  
  color:white;
  height:100%;
  list-style-type: none;
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
  display: inline-block;
  
  padding-bottom: calc(height-(font-size))
`;

class Nav extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Navbar>
        <NavItem><h3>HUEHEU</h3></NavItem>
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