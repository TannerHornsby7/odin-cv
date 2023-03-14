//import logo from './logo.svg';
import {Input, Display} from './components/Input';
import './App.scss';
import React, { Component } from "react";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'Name',
      age: 'Age',
      email: 'E-Mail',
      cell: 'Cell',

      college: 'College',
      degree: 'Degree',
      major: 'Major',
      gpa: 'GPA',

      company: 'Company',
      position: 'Position',
      start: 'Start Date',
      end: 'End Date',
    };

    this.printDisplay = this.printDisplay.bind(this);
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('submitted' + this.state.name);
    
    console.log('submitted ' + this.state.name);

  }
  printDisplay = () => {
    var divContents = document.getElementById("resume").innerHTML;
    var a = window.open('', '', 'height=825, width=600');
    a.document.write('<html>');
    a.document.write('<head>');
    a.document.write('<title>Resume</title>');
    a.document.write('<link rel="stylesheet" href={./components/display.scss} type="text/css" />');
    a.document.write('</head>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
  }
  render (){
    return(
    <div className="App">
    <Input state={this.state} hc={this.handleChange.bind(this)} hs={this.handleSubmit.bind(this)}sn='General' p1='name' p2='age' p3='email' p4='cell' />
    <Input state={this.state} hc={this.handleChange.bind(this)} hs={this.handleSubmit.bind(this)}sn='Education' p1='college' p2='degree' p3='major' p4='gpa' />
    <Input state={this.state} hc={this.handleChange.bind(this)} hs={this.handleSubmit.bind(this)}sn='Experience' p1='company' p2='position' p3='start' p4='end' />
    <br></br>
    <button onClick={this.printDisplay}> Print Resume </button>
    <Display content={this.state} />
    </div>
  );}
}


export default App;
