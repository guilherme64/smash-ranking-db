import React, { Component } from 'react';
const API = 'http://localhost:8000/api/players';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {players: null}
  }

  componentDidMount(){
    console.log('entrando');
    fetch(API).then(response=>response.json()).then(players =>this.setState({players}));
    console.log(this.state.players);
  }
  
  render(){
    const players = this.state.players;
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