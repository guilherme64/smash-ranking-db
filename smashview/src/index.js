import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import style from './style.css';
class App extends Component{
  render(){
    return(
      <div>
        <h1>Smash Ranking DB is ALIVE!</h1>
        <List />
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));