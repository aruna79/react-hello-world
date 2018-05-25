import React, {Component} from 'react';

class Student extends Component{
  render(){
    const studentName = this.props.name;
    const studentAge = this.props.age;
    const studentEmail = this.props.email;
    return(
      <article>
        <h3> {studentName}</h3>
        <p> Age: {studentAge}</p>
        <p>email: {studentEmail}</p>
      </article>
    );
  }
}

export default Student;
