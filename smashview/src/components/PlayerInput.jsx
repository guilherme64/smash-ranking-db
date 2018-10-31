import React, { Component } from 'react';
import styled, { css } from 'styled-components';
const API = 'http://localhost:8000/api/players';


const Form = styled.form`
  margin-top:20px;
  margin-bottom:20px;
`;
const Label = styled.label`
  font-size: 1.5em;
  font-family: sans-serif;
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
    constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {value: '', message: ''}
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }
    handleSubmit(event){
      //post na api
      console.log('mandou '+ this.state.value);
      console.log('entrando');
      fetch(API,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name: this.state.value,
          score: 0
        })
      }).then(response=>response.json()).then(message =>this.setState({message}));
      console.log(this.state.message);
    }

    render(){
      return(
          <Form onSubmit = {this.handleSubmit}>
            <Label>Here Comes a New Challenger: 
                <Input type='text' value={this.state.value} onChange = {this.handleChange} required />
                <Submit type='submit' />
            </Label>
          </Form>
      );
    }

}

export default PlayerInput;