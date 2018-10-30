import React, { Component } from 'react';
import Player from './Player';

const API = 'http://localhost:8000/api/players';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {players: []}
  }

  componentDidMount(){
    console.log('entrando');
    fetch(API).then(response=>response.json()).then(players =>this.setState({players}));
    console.log(this.state.players);
  }
  
  render(){
    const players = Array.from(this.state.players).map(function(cur){
      return [cur.name, cur.score];
    });
    console.log(players);

   
    return(
      <div>
        <h2>Players</h2>

        {players.map(function(cur, index){
          console.log(cur);
          return(
              <a href='#'>
                <Player key={index+1} name={cur[0]} score = {cur[1]} />
              </a>
          );
        })}
      </div>
    ); 
  }
}
export default List;