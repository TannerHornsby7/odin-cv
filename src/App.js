//import logo from './logo.svg';
import {Input, Display} from './components/Input';
import './App.scss';
import {useState} from 'react';
import React, { Component } from "react";

function App () {

    const [state, setState] = useState({
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
    });

  function handleChange (e) {
    // console.log(state);
    setState({...state, [e.target.id]: e.target.value});
    // console.log(state);
  };

  function printDisplay () {
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
  return(
    <div className="App">
    <Input state={state} hc={handleChange} sn='General' p1='name' p2='age' p3='email' p4='cell' />
    <Input state={state} hc={handleChange} sn='Education' p1='college' p2='degree' p3='major' p4='gpa' />
    <Input state={state} hc={handleChange} sn='Experience' p1='company' p2='position' p3='start' p4='end' />
    <br></br>
    <button onClick={printDisplay}> Print Resume </button>
    <Display content={state} />
    </div>
  );
}


export default App;
