import React, { Component } from 'react';
import './Person.css';

class Person extends Component = {
  render() {
    console.log('[Person.js] rendering...')
    return (
      <div className="Person">
      <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} year old..</p>
      <p>{props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
  )
 }
}
export default Person;
//<p>I am {props.name} and I am {props.age} year old..</p>
//<input type="text" onClick={} />
