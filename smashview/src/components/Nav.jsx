import React, { Component } from 'react';
import style from'./Nav-style.css';

class Nav extends Component{
  render() {
    return(
      <nav className = "nav">
        <ul>
          <li className='nav--elm nav--elm__title'>Smash Ranking DB</li>
          <li className='nav--elm'>Jogadores</li>
          <li className='nav--elm'>Campeonatos</li>
        </ul>
      </nav>
    )
  }
}


export default Nav;