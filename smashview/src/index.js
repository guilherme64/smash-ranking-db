import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Nav from './components/Nav';
import style from './style.css';
class App extends Component{
  render(){
    return(
      <div>
        <Nav />
        <List />
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));