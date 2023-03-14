import logo from './logo.svg';
import {Input, Display} from './components/Input';
import './App.scss';
import React, { Component } from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'name',
      age: 'age',
      email: 'email',
      cell: 'cell',

      college: 'College',
      degree: 'Degree',
      major: 'Major',
      gpa: 'GPA',

      company: 'Company',
      position: 'Position',
      start: 'Start Date',
      end: 'End Date',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.placeholder]: e.target.value //SQUASH ME
    });
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted ' + this.state.name);
    console.log('submitted' + this.state.name);
  }
  
  render (){
    return(
    <div className="App">
    <Input hc={this.handleChange.bind(this)} hs={this.handleSubmit.bind(this)}sn='General' p1={this.state.name} p2={this.state.age} p3='E-Mail' p4='Cell #' />
    <Input hc={this.handleChange.bind(this)} hs={this.handleSubmit.bind(this)}sn='Education' p1='Name' p2='Age' p3='E-Mail' p4='Cell #' />
    <Input hc={this.handleChange.bind(this)} hs={this.handleSubmit.bind(this)}sn='Experience' p1='Name' p2='Age' p3='E-Mail' p4='Cell #' />
    <Display />
    </div>
  );}
}


export default App;
