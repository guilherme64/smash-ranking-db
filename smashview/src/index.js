import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import style from './style.css';

class App extends Component{
 

  render(){
      return(
        <Container />  
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));