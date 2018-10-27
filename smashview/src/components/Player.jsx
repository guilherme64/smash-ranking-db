import React, { Component } from 'react';

class Player extends Component{
  constructor(props){
    super(props);
    this.state = {name: this.props.name, score: this.props.score};
  }
  render(){
    console.log(this.state.name);
    return(
      <div>
        <p>Jogador: {this.state.name}</p>
        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}

export default Player;