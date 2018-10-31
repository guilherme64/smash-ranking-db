import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 1.5em;
`;

const Input = styled.input.attrs({
  type: 'text'
})`
  border-radius: 10px;
  outline: none;
  padding: 5px;
  font-size: 0.8em;
  margin: 5px;
  background-color:rgb(244, 240, 239);
  border: 2px solid #385F94;
`;

const Submit = styled.input.attrs({
  type: 'submit'
})`
  border-radius: 10px;
  outline: none;
  padding: 5px;
  font-size: 0.8em;
  margin: 5px;
  background-color:rgb(244, 240, 239);
  border: 2px solid #385F94;
  color: #385F94;
`;

class PlayerInput extends Component{

    render(){
      return(
          <form>
            <Label>Add player: 
                <Input type='text' />
                <Submit type='submit' />
            </Label>
          </form>
      );
    }

}

export default PlayerInput;