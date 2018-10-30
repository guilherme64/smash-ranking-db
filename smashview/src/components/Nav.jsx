import React, { Component } from 'react';
import style from'./Nav-style.css';

class Nav extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return(
      <nav className = "nav">
        <ul className='nav--list'>
          <li className='nav--elm nav--elm__title'><a href='#'>Smash Ranking DB</a></li>
          <li className='nav--elm'><a href='#'>Jogadores</a></li>
          <li className='nav--elm'><a href='#'>Campeonatos</a></li>
        </ul>
      </nav>
    )
  }
}


export default Nav;