import React, { Component } from 'react';
const API = 'http://localhost:8000/api/players';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {players: 'a'}
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
        {players}
      </div>
    ); 
  }
}
export default List;