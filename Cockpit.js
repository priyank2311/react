import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const design = {
    backgroundColor: 'black',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };


  const assignedClasses = [];
  if (props.showPersons){
    design.backgroundColor = 'red';
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
    <div className="cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really Working</p>
    <button
      style={design}
      onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
