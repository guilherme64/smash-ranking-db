import React from 'react';
import List from './List';
import Nav from './Nav';
import PlayerInput from './PlayerInput';
 
 class Container extends React.Component{
 constructor(props){
    super(props);
    this.state = {page: 'main'};
    
  }
  handleClick(event){

  }

  render(){
    return(
        <div>
          <Nav />
          <PlayerInput />
          <List />
        </div>   
    );
  }
}
export default Container;