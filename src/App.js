import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {

  render() {
    const students = [
      {
        name: 'Hermine Granger',
        age:13,
        email:'h@granger.edu'
      },
      {
        name: 'Ada lovelace',
        age:13,
        email:'ada@adadev.org'
      },
    ];

    const studentComponents = students.map((student) => {
      return(
        <Student
        key={student.email}
        name={student.name}
        email={student.email}
        age={student.age}
        />
      );
    });

    const greeting = 'Welcome to React';
    const appClassName = 'App';
    const name = "Maggie"

    return (
      <div className={appClassName}>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{greeting}</h1>
      </header>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>Hello World</p>
      <p>{name}</p>
      
        {studentComponents}
      </div>
     );
  }
}

export default App;
